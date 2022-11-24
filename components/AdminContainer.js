import React from 'react'
import Card from './Card'
import Middle from './Middle'
import RightBar from './RightBar'

const AdminContainer = (props) => {
    return (
        <div className=" bg-gradient-to-r   " >
            <div className="  px-8 py-1 ">
                <p className="text-gray-500 text-lg">
                    Documents by
                </p>
                <p className="font-bold text-2xl transform -translate-y-2">
                    {props.username}
                </p>
            </div>
            <div>
            <div className="flex p-4 mt-4 space-x-12 ml-40">
                    <Card title="ADDRESS PROOF" icon={0} type="unchecked" />
                    <Card title="BANK STATEMENT"  icon={0} type="unchecked" />
                    <Card title="BUSINESS PROOF"  icon={0} type="unchecked" />
                </div>
                <div className="flex p-4 space-x-12 ml-40">
                    <Card title="EMPLOYMENT PROOF"  icon={0} type="unchecked" />
                    <Card title="FUND RAISING"  icon={0} type="unchecked" />
                    <Card title="IDENTITY PROOF"  icon={0} type="unchecked" />
                </div>
                <div className="flex p-4 space-x-12 ml-40">
                    <Card title="INVOICES" icon={0} type="unchecked" />
                    <Card title="PERSONAL FINANCE"  icon={0} type="unchecked" />
                    <Card title="POWER OF ATTORNEY"  icon={0} type="unchecked" />

                </div>
                <div className="flex p-4 space-x-12 ml-40">
                    <Card title="RECEIPT"  icon={0} type="unchecked" />
                    <Card title="SALARY SLIP"  icon={0} type="unchecked" />
                    <Card title="TAX RETURN"  icon={0} type="unchecked" />

                </div> 
            </div>
            {/* <div className="flex  ml-3 mt-6 space-x-6  mr-4">
            </div> */}
        </div>
    )
}

export default AdminContainer
