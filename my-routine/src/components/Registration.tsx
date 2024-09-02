export default function Registration() {
  return (
    <>
      <label htmlFor="date">
        Date
        <input
          type="date"
          name="date"
          id="date"
          onChange={(e) => console.log(e.target.value)}
        />
      </label>

      <label htmlFor="dayOfWeek">
        Day of Week
        <input
          type="text"
          name="dayOfWeek"
          id="dayOfWeek"
          onChange={(e) => console.log(e.target.value)} // Função para lidar com alterações
        />
      </label>
    </>
  );
}
