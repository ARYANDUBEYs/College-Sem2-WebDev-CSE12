function Student({ name, grade, marks }) { 
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Grade: {grade}</p>
            <p>Marks: {marks}</p>
        </div>
    );
}

export default Student;