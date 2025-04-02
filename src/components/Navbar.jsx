import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";

function Navbar() {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.auth);
	return (
		<>
			<nav className='navbar navbar-expand-lg px-5'>
				<div className='container-fluid'>
					<NavLink className='navbar-brand' to='/'>
						Blog
					</NavLink>
					<div>
						{isAuthenticated ? (
							<>
								<button className='btn' onClick={() => dispatch(logout())}>
									Logout
								</button>
							</>
						) : (
							<ul className='navbar-nav  mb-2 mb-lg-0'>
								<li className='nav-item'>
									<NavLink className='nav-link active' to='/register'>
										Register
									</NavLink>
								</li>
								<li className='nav-item'>
									<NavLink className='nav-link active' to='/login'>
										Login
									</NavLink>
								</li>
							</ul>
						)}
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
