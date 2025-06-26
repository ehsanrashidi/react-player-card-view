import React from "react";

export const Header = ({ title }: { title: string }) => {
    return (
        <header className="header">
            <h1 className="title">{title}</h1>
        </header>
    );
};
