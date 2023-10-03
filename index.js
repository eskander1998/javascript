const oppoStatus = [
  {
    K_OPPO_STATUS: 1,
    STATUS: "1. Initial Contact",
    SUCCESS: 0,
  },
  {
    K_OPPO_STATUS: 2,
    STATUS: "2. Demonstration",
    SUCCESS: 25,
  },
  {
    K_OPPO_STATUS: 3,
    STATUS: "3. Proposal",
    SUCCESS: 50,
  },
  {
    K_OPPO_STATUS: 4,
    STATUS: "4. Negotiation",
    SUCCESS: 75,
  },
  {
    K_OPPO_STATUS: 5,
    STATUS: "5. Order",
    SUCCESS: 100,
  },
];

const Module = class {
  constructor() {}
  start() {
    // Start modifying the form elements here!
    // You are allowed to add extra methods and properties to this class

    const select = document.querySelector("[name='status']");
    const input = document.querySelector("[name='success']");

    //Object with relation status and success
    const succesStatus = {};

    //Load the <select> options with the contents of the global oppoStatus array.
    oppoStatus.map((oppoStatus) => {
      const option = document.createElement("option");
      option.value = oppoStatus.STATUS;
      option.innerHTML = oppoStatus.STATUS;
      select.appendChild(option);

      succesStatus[oppoStatus.STATUS] = oppoStatus.SUCCESS;
      });

    // When status is changed, set the associated value of success (e.g. status 4 sets success=75)
    select.addEventListener("change", () => {
      input.value = succesStatus[select.value];
    });

   /*  On form submit, output the form element values as JSON string. We want to see the values, not the text. {"status":3,"success":50} */
    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      var successArray = oppoStatus.find(element => element.STATUS == event.target.status.value);

      const response = {
        "status" : successArray.K_OPPO_STATUS,
        "success": successArray.SUCCESS
      };
      document.querySelector("[class='output']").innerHTML = JSON.stringify(response);
    })
  }
};

const main = new Module();
main.start();