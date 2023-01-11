import { HTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface pProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    children: ReactNode;
    size?: 's' | 'm' | 'l';
}