import React from 'react';
import { shell } from 'electron';
import { currentVersion } from '../core/updater';

import '../../public/styles/Footer.postcss';

const openLink = e => {
    e.preventDefault();
    shell.openExternal(e.currentTarget.href);
};

const Footer = () => (
    <footer>
        <div className="bottom-rocket">
            <div className="links">
                <a href="https://github.com/assnctr/unfx-proxy-checker" title="Go to Github Page" className="big" onClick={openLink}>
                    <svg viewBox="0 0 90 90">
                        <path d="M65.709,10.5c1.17,2.657,1.928,7.07,0.797,10.301c4.625,3.949,6.215,13.549,3.982,21.394   C77.08,42.698,84.932,41.953,90,43.976c-4.738-0.609-11.209-1.804-17.32-1.388c-1.158,0.079-2.873-0.044-2.789,1.585   c7.074,0.555,14.104,1.16,19.912,2.973c-5.761-0.941-12.754-2.375-19.912-2.574c-2.957,5.835-8.908,8.703-17.123,9.307   c0.883,1.922,2.574,2.653,2.987,5.744c0.616,4.618-0.964,11.381,0.595,14.459c0.748,1.475,1.967,1.514,2.789,2.775   c-2.012,2.381-7-0.268-7.568-2.775c-0.973-4.295,1.482-10.953-1.192-13.865c0.188,4.685-1.108,11.264,0.199,15.449   c0.515,1.646,2.002,2.281,1.593,3.766c-9.352,0.949-5.443-12.104-6.972-19.81c-1.411,0.101-0.791,2.113-0.796,2.972   c-0.04,7.524,1.54,17.844-6.57,16.838c-0.237-1.582,1.088-2.119,1.593-3.563c1.479-4.233-0.277-10.542,0.401-15.651   c-3.095,2.334,0.325,10.48-1.593,14.657c-1.105,2.404-4.666,3.45-7.367,2.377c0.352-1.79,2.2-1.501,2.984-3.169   c1.096-2.324,0.008-5.674,0.399-9.111c-5.729,1.144-10.173-0.166-12.348-3.764c-0.973-1.615-1.214-3.52-2.39-4.951   c-1.17-1.432-3.04-1.625-3.582-3.563c7.095-1.708,7.367,7.302,13.739,7.524c1.954,0.071,2.97-0.563,4.778-0.988   c0.506-2.272,1.589-3.967,3.186-5.153c-7.929-1.085-14.477-3.554-17.522-9.504c-7.208,0.354-13.804,1.317-19.913,2.771   c5.545-2.014,12.384-2.736,19.715-2.973c-0.432-2.596-4.219-1.882-6.57-1.782C8.973,42.781,3.473,43.324,0,43.976   c5.034-1.795,12.098-1.571,18.918-1.585c-2.086-6.54-1.363-16.929,3.186-20.798C20.815,18.344,21.215,13.03,22.9,10.5   c5.079,0.228,8.159,2.443,11.35,4.557c3.957-1.125,8.118-1.685,13.54-1.387c2.28,0.126,4.651,1.151,6.369,0.989   c1.685-0.158,3.542-2.049,5.178-2.771C61.468,10.947,63.271,10.588,65.709,10.5z" />
                    </svg>
                </a>
                <a href="https://openproxy.space" title="Go to Open Proxy Space" className="big" onClick={openLink}>
                    <svg viewBox="0 0 396.821 396.821">
                        <path d="M394.583,8.054c-0.422-3.413-3.11-6.101-6.522-6.523c-30.748-3.803-62.477-0.488-91.767,9.583c-29.293,10.072-56.355,26.973-78.258,48.876l-49.983,49.983l-72.149,9.305c-1.645,0.212-3.172,0.963-4.345,2.135l-69.563,69.563c-1.969,1.969-2.685,4.868-1.858,7.528c0.825,2.66,3.058,4.643,5.796,5.15l52.597,9.742l10.335,10.335l-22.003,11.915c-2.082,1.127-3.51,3.172-3.851,5.515s0.444,4.709,2.118,6.383l83.438,83.438c1.417,1.417,3.329,2.197,5.304,2.197c0.358,0,0.72-0.026,1.08-0.078c2.343-0.341,4.388-1.769,5.515-3.851l11.916-22.003l10.335,10.335l9.742,52.597c0.508,2.739,2.49,4.971,5.15,5.797c0.731,0.227,1.48,0.337,2.224,0.337c1.96,0,3.876-0.769,5.305-2.197l69.563-69.563c1.172-1.172,1.923-2.7,2.135-4.344l9.306-72.15l49.983-49.984c21.903-21.903,38.804-48.964,48.876-78.257C395.072,70.528,398.385,38.795,394.583,8.054z M79.674,198.355l-36.989-6.851l57.673-57.675l50.332-6.491L79.674,198.355zM152.065,313.268L82.846,244.05l17.085-9.252l61.385,61.386L152.065,313.268z M262.285,295.756l-57.674,57.674l-6.852-36.988l71.017-71.017L262.285,295.756z M325.517,167.471l-135.85,135.85l-96.874-96.874l135.85-135.851c19.738-19.739,44.002-35.076,70.287-44.49c3.395,17.492,11.948,33.719,24.654,46.424c12.705,12.706,28.931,21.259,46.424,24.655C360.593,123.468,345.255,147.732,325.517,167.471z M374.523,82.774c-15.203-2.593-29.345-9.863-40.333-20.85c-10.988-10.987-18.257-25.13-20.85-40.333c21.741-5.859,44.579-7.857,66.99-5.807C382.381,38.195,380.382,61.033,374.523,82.774z" />
                        <path d="M221.325,110.443c-17.74,17.741-17.74,46.606,0,64.347c8.871,8.871,20.521,13.305,32.174,13.305c11.649,0,23.304-4.436,32.173-13.305h0.001c17.74-17.74,17.74-46.606-0.001-64.347C267.931,92.703,239.065,92.704,221.325,110.443z M275.066,164.183c-11.894,11.893-31.244,11.891-43.134,0c-11.893-11.892-11.893-31.242,0-43.134c5.945-5.946,13.756-8.918,21.566-8.918c7.811,0,15.621,2.973,21.566,8.918C286.957,132.941,286.957,152.291,275.066,164.183z" />
                        <path d="M98.365,299.165c-2.93-2.929-7.678-2.929-10.607,0L23.41,363.512c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l64.347-64.347C101.293,306.843,101.293,302.094,98.365,299.165z" />
                        <path d="M108.263,319.671l-28.991,28.991c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991c2.929-2.929,2.929-7.678,0-10.606C115.941,316.742,111.193,316.742,108.263,319.671z" />
                        <path d="M69.123,361.919c-3.138,0-6.002,2.024-7.062,4.973c-1.078,2.998-0.075,6.441,2.416,8.416c2.547,2.02,6.266,2.13,8.928,0.265c2.84-1.99,3.992-5.81,2.639-9.024C74.931,363.774,72.099,361.919,69.123,361.919z" />
                        <path d="M76.044,366.549C76.234,367,75.864,366.099,76.044,366.549L76.044,366.549z" />
                        <path d="M47.91,380.025l-3.992,3.992c-2.93,2.929-2.93,7.678-0.001,10.607c1.465,1.464,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196l3.992-3.992c2.93-2.929,2.93-7.678,0.001-10.606C55.588,377.099,50.838,377.096,47.91,380.025z" />
                        <path d="M42.502,314.014c-2.93-2.929-7.678-2.929-10.607,0L2.904,343.005c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991C45.431,321.692,45.431,316.943,42.502,314.014z" />
                        <path d="M54.472,311.136c3.043-0.765,5.327-3.417,5.644-6.537c0.311-3.055-1.369-6.049-4.096-7.427c-2.895-1.464-6.523-0.853-8.769,1.494c-2.405,2.513-2.752,6.426-0.852,9.335c-0.06-0.09-0.106-0.156,0.015,0.029c0.126,0.185,0.083,0.118,0.023,0.029C48.204,310.626,51.429,311.901,54.472,311.136z" />
                        <path d="M73.867,293.257l3.991-3.992c2.929-2.929,2.929-7.678-0.001-10.606c-2.932-2.93-7.681-2.929-10.606,0.001l-3.991,3.992c-2.929,2.929-2.929,7.678,0.001,10.606c1.465,1.464,3.384,2.196,5.303,2.196C70.483,295.454,72.403,294.722,73.867,293.257z" />
                    </svg>
                </a>
            </div>
            <div className="details">
                <h2>Open Proxy Space</h2>
                <span>Unfx Proxy Checker v{currentVersion}</span>
            </div>
        </div>
    </footer>
);

export default Footer;
