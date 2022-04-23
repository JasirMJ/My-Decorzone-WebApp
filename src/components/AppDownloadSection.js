import React from 'react'

const AppDownloadSection = () => {
    return (
        <div>
            <div id="newsspec-19854-app" className="news-app-promo row mt-0">
                <div className="news-app-promo-text col-12 col-md-6">
                    {/* <div className="news-app-promo-text__tagline">The best way to get</div><br /> */}
                    <div className="news-app-promo-text__download">Download the App.</div>
                </div>
                <div className="news-app-promo__section col-12 col-md-6">
                    
                    <div className="news-app-promo-subsection">
                        <a className="news-app-promo-subsection--link news-app-promo-subsection--playstore" href="https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&hl=en" target="_parent">
                            <img className="news-app-promo__play-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg" width={161} height="auto" border={0} />
                        </a>
                        <a className="news-app-promo-subsection--link news-app-promo-subsection--appstore" href="https://itunes.apple.com/us/app/bbc-news/id364147881?mt=8" target="_parent">
                            <img className="news-app-promo__app-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg" width={161} height="auto" border={0} />
                        </a>
                    </div>
                </div>
              
            </div>
        </div>


    )
}

export default AppDownloadSection