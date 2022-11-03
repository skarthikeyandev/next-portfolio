import React from 'react'
import Link from 'next/link'
import { greetings } from '../Portfolio';
const Footer = () => {

    const FooterItems = ({i, item}) => {
        return (
            <li key={i}>
                <Link href={item.url} target="_blank" rel="noreferrer"><i className={item.className}></i></Link>
            </li>
        )
    }

    return  greetings && (
            <footer className="footer">
                <div className="footer-response">
                    <div className="footer-logo">
                        <Link href="/" >{greetings.copyright} </Link>
                    </div>
                    <div className='footer-content'>
                        <Link href="/" ><span>{greetings.copyrightyear}</span></Link>
                    </div>
                    <nav className="media-icons">
                        <ul>
                            {greetings.mediaIcons.map((item, i) => {
                                return <FooterItems key={i} item={item} />;
                            })}
                        </ul>
                    </nav>
                </div>
            </footer>
    )
}

export default Footer