import React, { useState } from "react";
export default function PdDataForm() {
    const [preOrder, setPreOrder] = useState({});

    const handleBlur = (e) => {
        const newSettings = { ...preOrder };
        newSettings[e.target.name] = e.target.value;

        // console.log(e.target.value, "value");

        // let value = {
        //     fieldName: e.target.name,
        //     fieldValue: e.target.value,
        // };
        // const newSettings = [...preOrder, value];
        setPreOrder(newSettings);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // let hiddenValue = {
        //     shop: ''
        // }
        // console.log("handle Submit");
        // const formData = new FormData();
        // formData.append("enable_for_preorder", preOrder.enable_for_preorder);
        // formData.append("quantity", preOrder.quantity);
        // formData.append("po_button_text", preOrder.po_button_text);
        // formData.append("po_message", preOrder.po_message);

        console.log(formData.entries());
        console.log(preOrder);

        // for (var [key, value] of formData.entries()) {
        //     console.log(key, value, "options");
        // }
    };

    // const [createResource, { loading, error }] = useMutation(
    //     MyAppBridge,
    //     mutations.createResource
    // );

    // const handleSubmit = async (data) => {
    //     try {
    //         await createResource({ variables: { input: data } });
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="hidden"
                    name="shop"
                    id="shop"
                    value="daal-furniture.myshopify.com"
                />
                <input
                    type="hidden"
                    name="product_id"
                    id="product_id"
                    value="1397666512947"
                />
                <input
                    value="variant"
                    name="settings[settings_type]"
                    type="hidden"
                    id="settings_settings_type"
                />
                {/* <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        onBlur={handleBlur}
                        type="text"
                        name="serviceName"
                        className="form-control"
                        id="exampleInputPassword1"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <input
                        onBlur={handleBlur}
                        type="text"
                        name="description"
                        className="form-control"
                        id="exampleInputEmail1"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        onBlur={handleBlur}
                        type="number"
                        name="price"
                        className="form-control"
                        id="exampleInputEmail1"
                        required
                    />
                </div> */}
                <section className="form-item">
                    <aside>
                        <h2>Enable</h2>
                    </aside>
                    <article>
                        <input
                            type="checkbox"
                            id="enable_for_preorder"
                            name="enable_for_preorder"
                            onBlur={handleBlur}
                            required
                        />
                        <label htmlFor="enable_for_preorder">
                            Enable pre order for this variant
                        </label>
                    </article>
                </section>
                <section className="form-item">
                    <aside>
                        <h2>Quantity</h2>
                    </aside>
                    <article>
                        <div className="input-item">
                            <label className="form-label"></label>
                            <input
                                onBlur={handleBlur}
                                type="number"
                                name="quantity"
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                        <div className="input-item"></div>
                    </article>
                </section>
                <section className="form-item">
                    <aside>
                        <h2>Pre order button</h2>
                    </aside>
                    <article>
                        <div className="input-item">
                            <label className="form-label">Button Text</label>
                            <input
                                onBlur={handleBlur}
                                type="text"
                                name="po_button_text"
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                        <div className="input-item">
                            <label className="form-label">
                                Pre order message
                            </label>
                            <input
                                onBlur={handleBlur}
                                type="text"
                                name="po_message"
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                    </article>
                </section>
                <section className="form-item">
                    <aside>
                        <h2>Badge</h2>
                    </aside>
                    <article>
                        <div className="input-item">
                            <label className="form-label">Text</label>
                            <input
                                onBlur={handleBlur}
                                type="text"
                                name="po_badge_text"
                                className="form-control"
                                id="exampleInputEmail1"
                                required
                            />
                        </div>
                    </article>
                </section>
                <div className="my-btn">
                    <button
                        type="submit"
                        className="Polaris-Button Polaris-Button--primary"
                    >
                        <span className="Polaris-Button__Content">Submit</span>
                    </button>
                </div>
            </form>

            {/* <Form onSubmit={handleSubmit}>
                <TextField label="Name" name="name" />
                <TextField label="Email" name="email" type="email" />
                <Button submit>Submit</Button>
            </Form> */}
        </>
    );
}
