import Script from 'next/script';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

const GoogleAnalytics = () => {
    if (!GA_TRACKING_ID) {
        return null; // Don't render if tracking ID is not available
    }

    return (
        <Script
            strategy="afterInteractive" // Load the script after interactive content is available
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
    );
};

export default GoogleAnalytics;
