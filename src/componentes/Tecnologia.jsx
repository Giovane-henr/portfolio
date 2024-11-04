
function Tecnologia({ image, nome }) {
  return (<>
    <div className=" flex flex-col items-center w-1/5 p-4">
      <div className="bg-primary-900 transition hover:scale-105 rounded-2xl w-full flex flex-col items-center text-secondary-900 p-4">
        <i className={image + " text-9xl"} />
        <h2 className=" text-2xl mt-4">{nome}</h2>
      </div>
    </div>
  </>
  )

}
export default Tecnologia