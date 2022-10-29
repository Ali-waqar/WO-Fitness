'use es6';

import * as utils from '../utils';
import {
    addPixels,
    disablePixels,
    reinstallPixels,
    onUtkReady
} from './pixels';
import {
    fetchConfig
} from '../configFetcher';

const start = function start() {
    const envString = utils.getEnv() === 'qa' ? 'qa' : '';
    const hublet = utils.getHublet();
    const hubletString = hublet === 'na1' || !hublet ? '' : `-${hublet}`;
    const configDomain = `api${hubletString}.hubapi${envString}.com`;
    let config = null;
    let utk = null;

    if (window.disabledHsPopups && window.disabledHsPopups.indexOf('ADS') > -1) {
        return;
    } // For GDPR purposes, users must consent to privacy policy before pixel is added


    window._hsp = window._hsp || [];

    window._hsp.push(['addPrivacyConsentListener', function(consent) {
        if (consent.categories.advertisement) {
            if (!config) {
                fetchConfig({
                    jsonUrl: `${configDomain}/hs-script-loader-public/v1/config/pixel/json`,
                    jsonpUrl: `${configDomain}/hs-script-loader-public/v1/config/pixel/jsonp`
                }, cfg => {
                    config = cfg;
                    addPixels(cfg, utk); // fetch event settings

                    window._enabledEventSettings = [];
                    const hasGooglePixels = cfg.ADWORDS && cfg.ADWORDS.length > 0;
                    const hasForm = document.getElementsByTagName('form').length > 0;

                    if (hasGooglePixels && hasForm) {
                        fetchConfig({
                            jsonUrl: `${configDomain}/hs-script-loader-public/v1/config/adwords/enhanced-conversion-event-settings/json`,
                            jsonpUrl: `${configDomain}/hs-script-loader-public/v1/config/adwords/enhanced-conversion-event-settings/jsonp`
                        }, formEvents => {
                            window._enabledEventSettings = formEvents;
                        }, '');
                    }
                }, 'addPixels');
            } else {
                reinstallPixels(config, utk);
            }
        } else if (config) {
            disablePixels(config);
        }
    }]);

    window._hsq = window._hsq || [];

    window._hsq.push(['addUserTokenListener', function(newUtk) {
        utk = newUtk;

        if (config) {
            onUtkReady(config, utk);
        }
    }]); // form submission event listener


    window.addEventListener('message', event => {
        if (event.origin !== 'https://forms.hsformsqa.com') {
            return;
        }

        const {
            data: {
                conversionId: transaction_id,
                formGuid
            }
        } = event;

        window._enabledEventSettings.forEach(({
            hubSpotFormId,
            pixelId,
            setId
        }) => {
            if (formGuid === hubSpotFormId) {
                const gTag = ['event', 'conversion', {
                    send_to: `AW-${pixelId}/${setId}`,
                    transaction_id
                }];
                window.dataLayer.push(...gTag);
            }
        });
    }, false);
};

window.PIXELS_RAN = window.PIXELS_RAN || false;

if (!window.PIXELS_RAN) {
    window.PIXELS_RAN = true; // Code entry point

    start();
}