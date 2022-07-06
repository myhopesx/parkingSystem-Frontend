import { createContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  // const logincustomers = async (email, password) => {
  //   const bodyData = JSON.stringify({
  //     password: password,
  //     email: email,
  //   });
  //   try {
  //     const request = await fetch("/customers/login", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: bodyData,
  //     });

  //     const data = await request.json();
  //     if (request.status === 401) {
  //       return false;
  //     }
  //     if (request.status === 200) {
  //       localStorage.setItem("userid", data.id);
  //       return true;
  //     }
  //     return false;
  //   } catch (e) {
  //     console.log(e);
  //     return false;
  //   }
  // };

  const logincustomers = async (email, password) => {
    const request = await fetch("/customers/login", {
      headers: {
        Authorization: "Basic " + window.btoa(email + ":" + password),
      },

      method: "POST",
    });
    const data = await request.json();

    if (request.status === 200) {
      // toast(successToast(data.message));

      // setIsLogged(1);

      // localStorage.setItem("isLogged", 1);
      localStorage.setItem("customerid", data.id);
      return true;

      // navigate("/");
      // } else {
      //   toast(errorToast(data.message));

    }
  };

  const loginadmin = async (email, password) => {
    console.log(1);
    try {
      const request = await fetch("/facilities-admins/login", {
        headers: {
          Authorization: `Basic ${window.btoa(email + ":" + password)}`,
          "X-Requested-Width": "XMLHttpRequest",
        },
        method: "POST",
      });

      console.log(2);

      const data = await request.json();

      console.log(3);
      console.log(data.msg);
      console.log(4);

      if (request.status === 401) {
        return false;
      }
      if (request.status === 200) {
        // const response = await fetch(`/facilities-admins/${email}`, {
        //   headers: {
        //     Authorization: `Basic ${window.btoa(email + ":" + password)}`,
        //     "X-Requested-Width": "XMLHttpRequest",
        //   },
        //   method: "POST",
        // });
        // const data = await response.json();
        // console.log(data);
        // console.log("nav");
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const loginsecurity = async (email, password) => {
    console.log(1);
    try {
      const request = await fetch("/securities/login", {
        headers: {
          Authorization: `Basic ${window.btoa(email + ":" + password)}`,
          "X-Requested-Width": "XMLHttpRequest",
        },
        method: "POST",
      });

      console.log(2);

      const data = await request.json();

      console.log(3);
      console.log(data.msg);
      console.log(4);

      if (request.status === 401) {
        return false;
      }
      if (request.status === 200) {
        console.log("nav");
        return true;
      }
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  };
  const adminregister = async (email, password, phonenumber, name) => {
    const bodyData = JSON.stringify({
      myUser: {
        password: password,
        phoneNumber: phonenumber,
        name: name,
        email: email,
        role: "owner",
      },
    });

    try {
      const request = await fetch("facilities-admins/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: bodyData,
      });
      const data = await request.json();
      console.log(data);

      if (request.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const customersregister = async (email, password, phonenumber, name) => {
    const bodyData = JSON.stringify({
      myUser: {
        password: password,
        phoneNumber: phonenumber,
        name: name,
        email: email,
        role: "customer",
      },
    });

    try {
      const request = await fetch("customers/register", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: bodyData,
      });
      const data = await request.json();
      console.log(data);

      if (request.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const securityregister = async (email, password, phonenumber, name) => {
    const bodyData = JSON.stringify({
      myUser: {
        password: password,
        phoneNumber: phonenumber,
        name: name,
        email: email,
        role: "security",
      },
    });

    try {
      const request = await fetch("/register/{facility_id}", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: bodyData,
      });
      const data = await request.json();
      console.log(data);

      if (request.status === 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        customersregister,
        securityregister,
        adminregister,
        logincustomers,
        loginadmin,
        loginsecurity,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
