import './Logo.scss';
// !!! Проблемы с лого (не показывается)
export function Logo() {
    return (
        <div className="logo">
            <a href="/">
                <img src="/img/logo.png" alt="" />
            </a>
        </div>
    );
}
