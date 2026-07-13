export default function GoogleMap() {
  return (
    <div className="mt-20 overflow-hidden rounded-3xl shadow-xl">
      <iframe
        src="https://www.google.com/maps?q=LB8+Calcite+Close,+Tesano,+Accra&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="NET Facilities Office Location"
      />
    </div>
  );
}