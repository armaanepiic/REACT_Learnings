export default function MessyTernary({user, isAdmin, isGuest}) {
    const message = user ? (isAdmin ? "Admin" : "Guest") : null;
    return (
        <div>
            <h1> Hello {message} </h1>
        </div>
    )
}