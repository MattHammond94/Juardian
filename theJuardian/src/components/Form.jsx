const FooterForm = () => {
  return (
    <section className="footer">
      <div className="registerHeader">
        <div className="line"></div>
        <h2>Register</h2>
        <div className="line"></div>
      </div>
      <p>If you would like to receive regular news updates from The Juardian,<br /> submit your email address below:</p>
      <input type="text" placeholder="Your email"/>
      <button>Sign Up</button>
    </section>
  )
}

export default FooterForm