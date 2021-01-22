export default function NewsletterSignup() {
    return (<>
        <h3>Stay Connected</h3>
        <div className="box"><p>Sign up for our newsletter to receive occasional news
            and updates.</p>
            <form method="post" name="newsletter-signup"><input type="hidden" name="form-name"
                                                                value="newsletter-signup"/>
                <div className="row gtr-uniform">
                    <div className="col-12"><input type="email" name="demo-email"
                                                   id="demo-email"
                                                   placeholder="Email"
                    />
                    </div>
                    <div className="col-12">
                        <ul className="actions">
                            <li><input type="submit" value="Sign Up" className="primary"/></li>
                        </ul>
                    </div>
                </div>
            </form>
        </div>
    </>)
}