//type guard -> in, typeof

type Alphanumeric = string | number;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};
add(1, 2); //3
add("1", "2"); //12

//in guard

type NormalUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};

type UserType = NormalUser | AdminUser;

const getUserInfo = (user: UserType) => {
  if ("role" in user) {
    console.log(
      `this is ${user.name} and his role is ${user.role}`,
    );
  }else{
    console.log(`this is normal user ${user.name}`);
  }
};

getUserInfo({ name: "John" });
getUserInfo({ name: "Jane", role: "admin" });
