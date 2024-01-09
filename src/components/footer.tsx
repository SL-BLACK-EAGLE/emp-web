import React from 'react'
import {footerContactLinks, footerMainLinks, footerSpecialLinks} from "@/FooterLinks";
import {Button, Link} from "@nextui-org/react";
import Input from "@/components/ui/Input";
import InputComponent from "@/components/ui/Input";
import {MailIcon} from "@/components/MailIcon";

const Footer = () => {
    return (
        <footer className="justify-center items-center flex-col md:flex-row w-full p-4 md:p-10 lg:p-16 xl:py-16 xl:px-24  bg-foreground">
            <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
                <div className="w-full flex flex-col">
                    <h2 className="font-bold text-white justify-start flex">Cucurbita</h2>
                    <span className="text-[1.1rem] mt-2 lg:mt-8">Revolutionized Operations With Our <br/>
                Initiative And Innovative Solutions
                </span>
                </div>
                <div className="flex flex-col justify-start md:justify-start w-full">
                    <h4 className="mb-3">Main Menu</h4>
                    {footerMainLinks.map((item, i)=>(
                      <span key={i}><Link className="text-span hover:text-primary" key={i} href={item.path}>{item.name}</Link></span>
                    ))}
                </div>
                <div className="flex flex-col justify-start md:justify-start w-full">
                    <h4 className="mb-3">Special Links</h4>
                    {footerSpecialLinks.map((item, i)=>(
                        <span key={i}><Link className="text-span hover:text-primary" key={i} href={item.path}>{item.name}</Link></span>
                    ))}
                </div>
                <div className="flex flex-col justify-start md:justify-start w-full">
                    <h4 className="mb-3">Contact</h4>
                    {footerContactLinks.map((item, i)=>(
                        <span key={i}>{item.name}</span>
                    ))}
                </div>
                <div className="flex flex-col justify-start md:justify-start lg:justify-center w-full gap-4">
                {/*    subscribe for news letters*/}
                    <span>Subscribe to Newsletter</span>
                    <div className="flex flex-row items-center justify-center gap-2">
                        <InputComponent
                            startContent={<MailIcon
                            className="text-2xl text-default-400 pointer-events-none flex-shrink-0 items-center" />}
                            placeholder="you@example.com"
                            type="email"
                            variant="bordered"
                            color="success"
                        />
                        <Button type="submit" variant="bordered" color="primary" className="items-center justify-center">Subscribe</Button>
                    </div>

                </div>

            </div>
            <hr className="w-full"/>
            <div className="w-full items-center flex justify-center">
                <div>
                    <span className="flex-wrap text-center flex mt-3">Copyright &copy; 2023 Cucarbita All Rights Reserved </span>
                </div>
            </div>
        </footer>
    )
}
export default Footer
