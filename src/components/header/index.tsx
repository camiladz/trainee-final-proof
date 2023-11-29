import userImage from '../../assets/user-profile-icon.svg'
import './styles.css'

export const Header = () => {

    return (
        <header className="header">
            <div className="header__content">    
            <div className="store__logo">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="44" height="44" rx="8" fill="#7249BC"/>
            </svg>
        </div>
        <div className="user__info">
            <svg className='help__icon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2302_412)">
                    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_2302_412">
                <rect width="24" height="24" fill="white"/>
                </clipPath>
                </defs>
            </svg>
            <svg className='notification__icon' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.9998 25H9.99977M17.9998 12C17.9998 10.4087 17.3676 8.88258 16.2424 7.75736C15.1172 6.63214 13.5911 6 11.9998 6C10.4085 6 8.88235 6.63214 7.75713 7.75736C6.63192 8.88258 5.99977 10.4087 5.99977 12C5.99977 15.0902 5.22024 17.206 4.34944 18.6054C3.6149 19.7859 3.24763 20.3761 3.2611 20.5408C3.27601 20.7231 3.31463 20.7926 3.46155 20.9016C3.59423 21 4.19237 21 5.38863 21H18.6109C19.8072 21 20.4053 21 20.538 20.9016C20.6849 20.7926 20.7235 20.7231 20.7384 20.5408C20.7519 20.3761 20.3846 19.7859 19.6501 18.6054C18.7793 17.206 17.9998 15.0902 17.9998 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="20" width="8" height="8" rx="4" fill="#7249BC"/>
            </svg>
            <img src={userImage} />
        </div>
            </div>
    </header>
    )
}