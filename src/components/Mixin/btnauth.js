export const btnauth = {
    data () {
        return {
            authedBtn: {}
        }
    },
    created () {
        var allpath = this.permission_routers
        var path = this.$route.path
        var patharr = path.split('/').splice(1,2)
        var parentId = this._.findIndex(allpath, ['path', '/' + patharr[0]])
        var childId = this._.findIndex(allpath[parentId].children,['path', patharr[1]])
        var hasAuth = allpath[parentId].children[childId].btnauth
        this.authedBtn = hasAuth
    },
    methods: {
        hasAuth: function (auth) {
          if(this._.has(this.authedBtn,auth)){
             return this.authedBtn[auth]
          } else {
             return false
          }
        }
    }
}