
export default function TwoColumnSection({ children }) {
    return (
        <div className="row">
            <div className="col-6 col-12-small">
                {children[0]}
            </div>
            <div className="col-6 col-12-small">
                {children[1]}
            </div>
        </div>
    )
}