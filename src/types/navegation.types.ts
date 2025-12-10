import { StaticImageData } from 'next/image';

export interface NavLink {
    label: string;
    href: string;
    ariaLabel?: string;
}

export interface HeaderProps {
    logoSrc?: string | StaticImageData;
    logoAlt?: string;
    onCTAClick?: () => void;
}