// /components/NextBreadcrumb.tsx
'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

type TBreadCrumbProps = {
    homeElement: ReactNode,
    separator: ReactNode,
    containerClasses?: string,
    listClasses?: string,
    activeClasses?: string,
    capitalizeLinks?: boolean
}

const BasicBreadcrumbs = ({homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks}: TBreadCrumbProps) => {

    const paths = usePathname()
    const pathNames = paths.split('/').filter( path => path )

    if (paths === '/') {
        return null; // Rien n'est rendu lorsque l'URL est à la racine
    }

    return (
        <div>
            <ul className={'flex list-none font-normal px-3 bg-white justify-center text-2xl {$containerClasses}'}>
                <li className={'font-normal px-3 hover:underline {$listClasses}'}><Link href={'/'}>{homeElement}</Link></li>
                {pathNames.length > 0 && separator}
            {
                pathNames.map( (link, index) => {
                    let href = `/${pathNames.slice(0, index + 1).join('/')}`
                    let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
                    let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
                    return (
                        <React.Fragment key={index}>
                            <li className={'font-normal px-3 hover:underline {$itemClasses} '} >
                                <Link href={href}>{itemLink}</Link>
                            </li>
                            {pathNames.length !== index + 1 && separator}
                        </React.Fragment>
                    )
                })
            }
            </ul>
        </div>
    )
}

export default BasicBreadcrumbs;