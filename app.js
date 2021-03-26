new Vue({
    el:"#app",
    data:{
        show:false,
        isAdd:true,
        isUpdate:false,
        filter:"",
        status:"",
        title:"",
        description:"",
        todos:[],
        editId:"",
    },
    methods:{
        handleSave:function(event){
            console.log("Save completed")
            this.todos.push({title:this.title,description:this.description,status:this.status});
        },
        changeButton:function(id){
            this.isAdd=false;
            this.isUpdate=true;
            this.title=this.todos[id].title;
            this.description=this.todos[id].description;
            this.status = this.todos[id].status;
            this.editId=id;
        },
        handleUpdate: function(){
            this.todos[this.editId]={title:this.title,description:this.description,status:this.status};
            this.isUpdate=false;
            this.isAdd=true;
            this.editId="";
        }
    },
    watch:{
        filter:function(value){
            if(this.filter !== ""){
                this.show = true
            }
        }
    }
})