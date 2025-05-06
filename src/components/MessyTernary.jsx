export default function MessyTernary({ user, isAdmin }) {
    function profile() {
        let content;
        if (!user) content = 'Guest';
        if (user && isAdmin) content = 'Admin';
        if (user && !isAdmin) content = 'Normal User';
    }
    
  return (
      <div>{profile()}</div>
  )
}
