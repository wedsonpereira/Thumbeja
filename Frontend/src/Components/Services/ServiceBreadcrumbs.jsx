import { Link } from 'react-router-dom';
import './ServiceBreadcrumbs.css';

const ServiceBreadcrumbs = ({ currentLabel, className = '' }) => {
    if (!currentLabel) {
        return null;
    }

    return (
        <div className={`service-breadcrumbs ${className}`.trim()}>
            <div className="service-breadcrumbs__inner">
                <nav className="service-breadcrumbs__nav" aria-label="Breadcrumb">
                    <ol className="service-breadcrumbs__list">
                        <li className="service-breadcrumbs__item">
                            <Link to="/" className="service-breadcrumbs__link">Home</Link>
                        </li>
                        <li className="service-breadcrumbs__separator" aria-hidden="true">/</li>
                        <li className="service-breadcrumbs__item">
                            <Link to="/services-thumbeja-publicity" className="service-breadcrumbs__link">Services</Link>
                        </li>
                        <li className="service-breadcrumbs__separator" aria-hidden="true">/</li>
                        <li className="service-breadcrumbs__item service-breadcrumbs__item--current" aria-current="page">
                            <span className="service-breadcrumbs__current-label">{currentLabel}</span>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    );
};

export default ServiceBreadcrumbs;
