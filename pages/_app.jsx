// import App from 'next/app'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className="mainContainer">
                <Component {...pageProps} />
            </div>
            {/* Reset.css */}
            <style jsx global>{`
                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                }
                /* HTML5 display-role reset for older browsers */
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                    display: block;
                }
                body {
                    line-height: 1;
                }
                ol,
                ul {
                    list-style: none;
                }
                blockquote,
                q {
                    quotes: none;
                }
                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                    content: "";
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
            `}</style>
            {/* Custom.css */}
            <style jsx global>
                {`
                    h1 {
                        font-size: 32px;
                        font-weight: 700;
                    }
                    .mainContainer {
                        margin: auto;
                        width: 80%;
                    }
                `}
            </style>
        </>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
