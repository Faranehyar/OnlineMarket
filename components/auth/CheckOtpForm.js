"use client"
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify';
import SubmitButton from '@/components/SubmitButton';
import { checkOtp } from '@/actions/auth';

export default function CheckOtpForm() {
    const [stateOtp, formActionOtp] = React.useActionState(checkOtp, {})

    useEffect(() => {
        toast(stateOtp?.message, { type: `${stateOtp?.status}` });
    }, [stateOtp])

    return (
        <div className="card-body">
            <div className="form_container">
                <form action={formActionOtp}>
                    <div className="mb-3">
                        <label className="form-label">کد ورود </label>
                        <input name='otp' type="text" className="form-control" />
                    </div>
                    <SubmitButton title="تایید" style="btn btn-primary btn-auth" />
                </form>
            </div>
        </div>
    )
}