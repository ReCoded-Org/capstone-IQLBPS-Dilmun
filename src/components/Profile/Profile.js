import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { doc, deleteDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { user } from '../../features/slices/user';
import { ADD_ITEM_ROUTE } from '../../route';
import defaultProfileImg from '../../assets/img/defaultProfileImg.jpg';
import defaultBGImg from '../../assets/img/defaultBGImg.jpg';
import { UserItemCard } from '../Cards';
import Form from "./Form";
import { useDispatch } from '../../app/store';
import { getUserItems } from '../../features/slices/item';
import { db } from '../../firebase-config';



function Profile() {
  const dispatch = useDispatch();
  const {userItems} = useSelector((state) => state.item);
  const userData = useSelector(user);
  const [userCity, setUserCity] = useState('')
  const [userCountry, setUserCountry] = useState()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
      if(userData.uid) {dispatch(getUserItems(userData.uid));}
  }, [userData]);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (!_.isEmpty(userData)) {
      const { city } = userData.address
      const capitalizeCity = city.charAt(0).toUpperCase() + city.slice(1)
      setUserCity(capitalizeCity)
      const { country } = userData.address
      const capitalizeCountry = country.charAt(0).toUpperCase() + country.slice(1)
      setUserCountry(capitalizeCountry)
    }
  })
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, "Items", id));
    console.log('deleted')
  }

  return (
    <div
      data-testid="profile"
      className=" bg-background  bg-cover bg-no-repeat w-full h-full flex flex-col justify-center items-center content-center "
    >
      <div className=" mt-5 mb-14 w-5/6 bg-background rounded-lg h-full relative">
        <div className="flex flex-col justify-center items-center rounded-lg ">
          <img
            src={defaultBGImg}
            alt="Background Img"
            className="bg-cover bg-center w-full min-h-[20vh] md:min-h-[40vh] rounded-lg "
          />
          <img
            src={defaultProfileImg}
            alt="Profile Img"
            className="rounded-full w-36 absolute flex outline outline-background  min-h-[15vh] md:min-h-[30vh] min-w-[15vh] md:min-w-[30vh]"
          />
        </div>
        <div className="flex flex-col items-center justify-center content-center  mb-14  rounded-lg  pt-4">
          <h1 className="font-bold text-[20px] sm:text-[26px] lg:text-[34px] text-primary m-1">
            {userData.firstName} {userData.lastName}
          </h1>
          {!_.isEmpty(userData) && <h3 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary m-1">
            {userCity},{userCountry}
          </h3>}

          {!_.isEmpty(userData) && <h5 className="font-semibold text-[14px] sm:text-[18px] lg:text-[24px] text-primary flex flex-row m-1">
            {userData.email}
          </h5>}

          <button type="button" onClick={toggleForm} className="text-primary hover:text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 m-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
          {isOpen && <Form toggleForm={toggleForm} />}

          <div className=" items-center divide-x border-t border-primary ">
            <div className="flex-grow border-t border-primary divide-x" />

            <h3 className="flex-shrink mx-16 font-bold text-[14px] sm:text-[18px] lg:text-[24px] text-primary mt-3 mb-3">
              My Items
            </h3>
          </div>
          <div className="grid xl:grid-cols-2 gap-4 p-5 max-w-screen-2xl	">
            {userItems.length > 0 && userItems.map((item) => (
              <UserItemCard key={item.id} item={item} deleteItem={() => deleteItem(item.id)} />
            ))}
          </div>
          <Link className='w-full text-center' to={ADD_ITEM_ROUTE}>
            <button
              type="button"
              className="w-1/2 p-4 font-semibold shadow-lg bg-primary text-background  rounded-md hover:bg-tertiary hover:text-primary duration-500"
            >
              Add New Item
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Profile;
