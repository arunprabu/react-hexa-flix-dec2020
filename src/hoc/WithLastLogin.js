// this is hoc
// higher order comp is gonna return the props children it gets
// can return multiple children tags also
// this is a wrapping comp that doesn't render any jsx on its own
// naming convention -- begin with 'With' prefix in its filename

const WithLastLogin = (props) => props.children;

export default WithLastLogin;