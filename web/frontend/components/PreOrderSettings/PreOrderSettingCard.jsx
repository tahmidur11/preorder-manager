import { Card } from "@shopify/polaris";
import React, { useState } from "react";
import PdDataForm from "../PdDataForm/PdDataForm";

export default function PreOrderSettingCard() {
    const faqs = [
        {
            id: 1,
            header: "Main Product",
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
        },
        {
            id: 2,
            header: "Variant Product",
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged`,
        },
    ];

    const AccordionItem = (props) => {
        const { handleToggle, active, faq } = props;
        const { header, id, text } = faq;
        return (
            <div className="rc-accordion-card">
                <div className="rc-accordion-header">
                    <div
                        className={`rc-accordion-toggle p-3 ${
                            active === id ? "active" : ""
                        }`}
                        onClick={() => handleToggle(id)}
                    >
                        <h5 className="rc-accordion-title">{header}</h5>
                        <i></i>
                        <svg
                            className="rc-accordion-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="currentColor"
                                d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225Z"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className={`rc-collapse ${active === id ? "show" : ""}`}
                    style={
                        active === id ? { height: "auto" } : { height: "0px" }
                    }
                >
                    <div className="rc-accordion-body">
                        <PdDataForm />
                    </div>
                </div>
            </div>
        );
    };

    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    };

    return (
        <>
            <Card title="Pre Order Settings">
                <>
                    <div
                        className="container-fluid"
                        style={{ marginTop: "20px" }}
                    >
                        <div className="row justify-content-center">
                            <div className="col-md-8 mt-2">
                                <div className="card">
                                    <div className="card-body">
                                        {faqs.map((faq, index) => {
                                            return (
                                                <AccordionItem
                                                    key={index}
                                                    active={active}
                                                    handleToggle={handleToggle}
                                                    faq={faq}
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            </Card>
        </>
    );
}
