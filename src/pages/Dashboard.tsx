import { useNavigate } from "react-router-dom"
import { useActions } from "../hooks/useActions";


export const Dasboard = () => {
    const navigate = useNavigate();
    const { data, loading, error, page, setPage } = useActions(1, 10);

    if (error) return <div>Error:{error}</div>;

    return (
        <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Actions</h1>
                <button onClick={() => navigate('/create-action')}>+ New action</button>
            </div>
            {
                loading ? (<p>Loading actions...</p>) : (
                    <>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>State</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.length > 0 ? (
                                        data.map((action) => (
                                            <tr key={action.id}>
                                                <td>{action.name}</td>
                                                <td>{action.description}</td>
                                                <td>{action.status || "Active"}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={3}>There is not actions to show</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                        <div className="pagination" style={{ marginTop: '1rem' }}>
                            <button disabled={page === 1} onClick={() => setPage(p => p - 1)}>Before</button>
                            <span>Pagine {page}</span>
                            <button onClick={() => setPage(p => p + 1)}>Next</button>
                        </div>
                    </>
                )
            }
        </div>
    )
}