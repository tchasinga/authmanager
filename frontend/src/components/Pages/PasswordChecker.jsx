/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { Check, X } from "lucide-react";


const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "At least 6 characters", met: password.length >= 6 },
		{ label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Contains a number", met: /\d/.test(password) },
		{ label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
	];
    return (
        <div className="mt-2 space-y-1">
            {criteria.map((items) => (
                <div key={items.label}  className="flex items-center text-xs">
                    {items.met ? (
                        <Check className='size-4 text-green-500 mr-2' />
                    ) : (
                        <X className='size-4 text-gray-500 mr-2' />  
                    )}
                    <span className={items.met ? "text-green-500" : "text-gray-400"}>{items.label}</span>
                </div>
            ))}
        </div>
    )
};

export default function PasswordChecker() {
  return (
    <div>

    </div>
  )
}
