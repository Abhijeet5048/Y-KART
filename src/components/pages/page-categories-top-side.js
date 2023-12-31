// Codes By Mahdi Tasha
// Importing Part
import PageCategoriesBreadCrumbComponent from "../bread-crumbs";

// Exporting Page Categories Top Side As Functional Component
export default function PageCategoriesTopSide({pageName, onClickOfShareBtn}) {
    // Returning JSX
    return(
        <div className='page__categories-top-side-holder'>
            <div className='page__categories-top-side'>
                <PageCategoriesBreadCrumbComponent />
                <button onClick={onClickOfShareBtn} className='page__categories-top-side-share-btn'>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 6.20005C13.0483 6.20007 13.5835 6.03319 14.0346 5.72161C14.4857 5.41003 14.8313 4.96851 15.0253 4.45577C15.2194 3.94302 15.2527 3.38335 15.121 2.85118C14.9892 2.31901 14.6986 1.83956 14.2877 1.47658C13.8769 1.1136 13.3652 0.884303 12.8209 0.819172C12.2765 0.754041 11.7252 0.856166 11.2403 1.11197C10.7554 1.36777 10.3599 1.76512 10.1063 2.25119C9.85273 2.73725 9.75312 3.289 9.82073 3.83305L5.37473 6.05605C4.99334 5.68827 4.51217 5.44083 3.99116 5.34455C3.47015 5.24827 2.93232 5.30742 2.44468 5.51461C1.95704 5.72181 1.54114 6.0679 1.24878 6.50977C0.956425 6.95164 0.800537 7.46977 0.800537 7.9996C0.800537 8.52943 0.956425 9.04756 1.24878 9.48943C1.54114 9.9313 1.95704 10.2774 2.44468 10.4846C2.93232 10.6918 3.47015 10.7509 3.99116 10.6547C4.51217 10.5584 4.99334 10.3109 5.37473 9.94315L9.82073 12.1662C9.74198 12.7982 9.88919 13.4377 10.2363 13.9717C10.5835 14.5056 11.1082 14.8997 11.7178 15.0842C12.3274 15.2687 12.9826 15.2318 13.5676 14.98C14.1526 14.7281 14.6297 14.2776 14.9147 13.708C15.1997 13.1384 15.2741 12.4864 15.1248 11.8673C14.9756 11.2481 14.6122 10.7016 14.099 10.3244C13.5858 9.94723 12.9558 9.7636 12.3203 9.80599C11.6848 9.84837 11.0848 10.114 10.6262 10.5561L6.18023 8.33305C6.20747 8.11189 6.20747 7.88822 6.18023 7.66705L10.6262 5.44405C11.1104 5.91205 11.771 6.20005 12.5 6.20005Z" fill="currentColor"/>
                    </svg>
                    Share
                </button>
            </div>
            <h1 className='page__categories-top-side-title'>{pageName}</h1>
        </div>
    );
}