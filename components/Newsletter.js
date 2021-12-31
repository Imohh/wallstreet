function Newsletter() {
	return (
		<>
			<div className="container newsletter">
				<div className="row">
					<div className="col-lg-12">
					<h2>join our newsletter!</h2>
						<form className="newsletter-wrapper">
							<input type="text" name="newsletter" />
							<input type="submit" value="submit" />
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Newsletter