"use client";

import React, {useEffect, useState} from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu, NavbarMenuItem, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem
} from "@nextui-org/react";
import {AcmeLogo} from "./logo";
import {ChevronDown, Lock, Activity, Flash, Server, TagUser, Scale} from "@/components/icons/icons";
import {menuItems, menuItemsDesktop} from "@/HeaderConstants";
import {useRouter} from "next/navigation";
import Link from "next/link";


type IconType = {
    icon: JSX.Element;
    title: string;
    description: string;
};

type Icons = {
    [key: string]: IconType;
};
const icons : Icons = {
    scale: {
        icon: <Scale className="text-warning" fill="currentColor" size={30} />,
        title: 'Retail Services',
        description: 'Cucurbita scales apps to meet user demand, automagically, based on load.'
    },
    lock: {
        icon: <Lock className="text-success" fill="currentColor" size={30} />,
        title: 'Security Services',
        description: 'Cucurbita provides secure access control for your apps.'
    },
    activity: {
        icon: <Activity className="text-secondary" fill="currentColor" size={30} />,
        title: 'Training Services',
        description: 'Real-time metrics to debug issues. Slow query added? We’ll show you exactly where.'
    },
    flash: {
        icon: <Flash className="text-primary" fill="currentColor" size={30} />,
        title: 'Delivery Services',
        description: 'Cucurbita runs on Cucurbita, join us and others serving requests at web scale.'
    },
    server: {
        icon: <Server className="text-success" fill="currentColor" size={30} />,
        title: 'Storage Services',
        description: 'Applications stay on the grid with high availability and high uptime guarantees.'
    },
    user: {
        icon: <TagUser className="text-danger" fill="currentColor" size={30} />,
        title: 'Partnership Services',
        description: 'Overcome any challenge with a supporting team ready to respond.'
    },
};
const chevIcon = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
}

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 600;
            setIsScrolled(isScrolled);
        };

        document.addEventListener('scroll', handleScroll);

        return () => {
            // cleanup - remove the listener when the component unmounts
            document.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
        {isScrolled && (
            <Navbar maxWidth={"lg"} className="flex right-0  bg-primary ext-foreground z-40">
                <NavbarContent className="hidden lg:flex gap-10 w-full justify-between" justify="center">
                    <Dropdown>
                        <NavbarItem>
                            <DropdownTrigger>
                                <Button
                                    disableRipple
                                    className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                    endContent={chevIcon.chevron}
                                    radius="sm"
                                    variant="light"
                                    size="lg"
                                >
                                    Cucurbita Services
                                </Button>
                            </DropdownTrigger>
                        </NavbarItem>
                        <DropdownMenu
                            aria-label="Cucurbita features"
                            className="w-[340px]"
                            itemClasses={{
                                base: "gap-4",
                            }}
                        >

                            {Object.entries(icons).map(([key], index) => (
                                <DropdownItem
                                    key={`${key}-${index}`}
                                    description={icons[key].description}
                                    startContent={icons[key].icon}
                                >
                                    {icons[key].title}
                                </DropdownItem>
                            ))}

                        </DropdownMenu>
                    </Dropdown>
                    {menuItemsDesktop.map((item, index) => (
                        <NavbarItem key={`${item}-${index}`}>
                            <Link
                                color="foreground"
                                className="w-full md:hidden lg:flex focus:text-primary hover:text-success"
                                href={item.path}
                            >
                                {item.name}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </Navbar>
        )}
        <Navbar onMenuOpenChange={setIsMenuOpen} maxWidth="full" isBordered shouldHideOnScroll className="">

            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand onClick={() => router.push("/")} className="cursor-pointer">
                    <AcmeLogo />
                    <p className="font-bold text-inherit">CUCURBITA</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={chevIcon.chevron}
                                radius="sm"
                                variant="light"
                                size="lg"
                            >
                                Cucurbita Services
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="Cucurbita features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >

                        {Object.entries(icons).map(([key], index) => (
                            <DropdownItem
                                key={`${key}-${index}`}
                                description={icons[key].description}
                                startContent={icons[key].icon}
                            >
                                {icons[key].title}
                            </DropdownItem>
                        ))}

                    </DropdownMenu>
                </Dropdown>
                {menuItemsDesktop.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full md:hidden lg:flex focus:text-primary hover:text-success"
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link className="border-primary border-2 rounded-md px-8 py-2 lg:flex hover:bg-orange-100" href="/merch">Merch</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color="foreground"
                            className="w-full focus:text-primary hover:text-success"
                            href={item.path}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        </>
    );
}
