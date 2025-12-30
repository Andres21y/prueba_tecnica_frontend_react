import { useForm } from "react-hook-form"
import type { ActionForm } from "../utils/interface"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api/client";

export const CreateAction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ActionForm>();
    const navigate = useNavigate();
    const [submitting, setSubmitting] = useState(false);

    const onSubmit = async (formData: ActionForm) => {
        try {
            await apiFetch('/actions/admin-add', {
                method: 'POST',
                body: JSON.stringify({
                    ...formData,
                    createdAt: new Date().toISOString()
                })
            });
            alert('Action created successfully')
            navigate('/dashboard')
        } catch (error: any) {
            alert('Error to create: ' + error.message)
        } finally {
            setSubmitting(false)
        }
    };

    return (
        <div className="container">
            <h2>Create new action</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                    <label>Action name</label>
                    <input type="text" {...register("name", { required: true })} />
                    {errors.name && <span className="error-message">{errors.name.message}</span>}
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea {...register("description", { required: true })} />
                    {errors.description && <span className="error-message">{errors.description.message}</span>}
                </div>

                <div className="form-group">
                    <label>State</label>
                    <select {...register("status")}>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                </div>

                <div style={{ marginTop: '1rem' }}>

                    <button
                        type="button"
                        onClick={() => navigate('/dashboard')}
                        disabled={submitting}>
                        cancell
                    </button>

                    <button
                        type="submit"
                        disabled={submitting}>
                        {submitting ? 'saving...' : 'create action'}
                    </button>
                </div>

            </form>
        </div>
    )
}