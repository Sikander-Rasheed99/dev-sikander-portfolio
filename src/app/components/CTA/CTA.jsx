import React from 'react'

const CTA = ({
    href = "#href",
    text,
    clasName = ""
}) => {
    return (
        <div dangerouslySetInnerHTML={{
            __html: `
                <a tabIndex="0" href=${href} class="py-[15px] px-[50px] sm:px-[80px] tracking-wider text-[16px] md:text-[20px] inline-block font-[700] shadow-xl duration-700 ease-in-out hover:translate-y-[-3px] sourceSans uppercase ${clasName}">${text}</a>
            `
        }}>
        </div>
    )
}

export default CTA
