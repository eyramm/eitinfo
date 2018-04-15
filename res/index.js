var myApp = angular.module("index", ["eitservices"]);
myApp.controller("AddController", ["eitService",
    function AddController(eitService) {
        this.firstname;
        this.lastname;
        this.dob;
        this.gender;
        this.getEditState = () => {
            return eitService.getEditState();
        }
        this.getActiveEitEdit = () => {
            return eitService.getEditState() ? eitService.getActiveEitEdit() : null;
        }
        this.addEit = (fname, lname, dob, gender) => {
            if (fname) {
                eitService.addEit(fname, lname, dob, gender);
                this.firstname = null;
                this.lastname = null;
                this.dob = null;
                this.gender = null;
            }
        }
        this.updateEit = (fname, lname, dob, gender) => {
            eitService.updateEit(fname, lname, dob, gender);
            this.firstname = null;
            this.lastname = null;
            this.dob = null;
            this.gender = null;
        }

    }])
myApp.controller("ViewController", ["eitService",
    function ViewController(eitService) {
        this.getActiveEit = () => {
            return eitService.getActiveEit();
        };
        this.getFullName = (eit) => {
            return eitService.getFullName(eit);
        }
        this.getAge = (eit) => {
            return eitService.getAge(eit);
        }
        this.getFullAge = (eit) => {
            return eitService.getFullAge(eit);
        }
        this.clearActiveView = () => {
            eitService.activeEit = null;
        }
    }
])
myApp.controller("ListController", ["eitService",
    function ListController(eitService) {
        this.getEitList = () => {
            return Object.values(eitService.eits);
        }
        this.removeEit = (id) => {
            eitService.removeEit(id);
        }

        this.viewEit = (id) => {
            eitService.setActiveEit(id);
        }
        this.editEit = (id) => {
            eitService.setActiveEitEdit(id);
            eitService.setEditState(true);
        }

    }
])