import Button from "../common/Button";

function ProfileCard() {

  const user = {
    name: "Nirbhay Jakhar",
    email: "nirbhay@example.com",
    phone: "+91 9876543210",
    joined: "July 2026",
    avatar: "https://ui-avatars.com/api/?name=Nirbhay+Jakhar&background=22c55e&color=fff&size=200",
  };

  return (

    <div className="bg-white rounded-xl shadow border p-6">

      <div className="flex flex-col items-center">

        <img
          src={user.avatar}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-green-500"
        />

        <h2 className="text-2xl font-bold mt-4">
          {user.name}
        </h2>

        <p className="text-gray-500">
          {user.email}
        </p>

      </div>

      <div className="mt-8 space-y-3">

        <p>
          <strong>Phone :</strong> {user.phone}
        </p>

        <p>
          <strong>Member Since :</strong> {user.joined}
        </p>

      </div>

      <Button
        className="w-full mt-8"
      >
        Edit Profile
      </Button>

    </div>

  );

}

export default ProfileCard;