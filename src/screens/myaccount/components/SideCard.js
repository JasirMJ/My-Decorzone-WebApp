import React from 'react'

const SideCard = () => {
    return (
        <div className="ec-shop-leftside ec-vendor-sidebar col-lg-3 col-md-12">
        <div className="ec-sidebar-wrap">
            {/* Sidebar Category Block */}
            <div className="ec-sidebar-block">
            <div className="ec-vendor-block">
                <div className="ec-vendor-block-items">
                <ul>
                    <li><a href="/myaccount">User Profile</a></li>
                    <li><a href="/myorders">My Orders</a></li>
                    <li><a href="/cart">Cart</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default SideCard
