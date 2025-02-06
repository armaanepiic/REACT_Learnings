export default function MessyTernary({user, isAdmin, isGuest}) {
    <div>
      <h1>{user ? (isAdmin ? "admin" : "user") : (isGuest ? 'guest' : 'user')}</h1>
    </div>;
}