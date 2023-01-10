Search.setIndex({docnames:[".well-known/.well-known/security","architecture","changelog","code_of_conduct","config_and_admin/audit_logs","config_and_admin/oidc","configuring","contributing","contribution/index","contribution/module_lifecycle_development_status","contribution/module_lifecycle_maintainer_role","disbursement/index","features","functional_architecture","glossary","index","installation","license","programs/concepts","programs/cycle_manager","programs/dashboards","programs/deduplication_manager","programs/eligibility_manager","programs/entitlement_manager","programs/notification_manager","programs/program_manager","registrants/api","registrants/apps","registrants/concepts","registrants/exporting","registrants/importing","requirements","roadmap","security-report","using/managing_programs","using/managing_users"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:[".well-known/.well-known/security.txt","architecture.md","changelog.rst","code_of_conduct.md","config_and_admin/audit_logs.md","config_and_admin/oidc.md","configuring.rst","contributing.md","contribution/index.md","contribution/module_lifecycle_development_status.rst","contribution/module_lifecycle_maintainer_role.rst","disbursement/index.md","features.md","functional_architecture.md","glossary.md","index.rst","installation.md","license.md","programs/concepts.md","programs/cycle_manager.rst","programs/dashboards.md","programs/deduplication_manager.md","programs/eligibility_manager.rst","programs/entitlement_manager.rst","programs/notification_manager.rst","programs/program_manager.rst","registrants/api.md","registrants/apps.md","registrants/concepts.md","registrants/exporting.md","registrants/importing.md","requirements.txt","roadmap.md","security-report.md","using/managing_programs.md","using/managing_users.md"],objects:{"odoo.addons.g2p_programs.models.managers.cycle_manager":[[19,0,1,"","BaseCycleManager"],[19,0,1,"","DefaultCycleManager"]],"odoo.addons.g2p_programs.models.managers.cycle_manager.BaseCycleManager":[[19,1,1,"","add_beneficiaries"],[19,1,1,"","check_eligibility"],[19,1,1,"","issue_payments"],[19,1,1,"","mark_cancelled"],[19,1,1,"","mark_distributed"],[19,1,1,"","mark_ended"],[19,1,1,"","new_cycle"],[19,1,1,"","on_start_date_change"],[19,1,1,"","on_state_change"],[19,1,1,"","prepare_entitlements"],[19,1,1,"","validate_entitlements"]],"odoo.addons.g2p_programs.models.managers.cycle_manager.DefaultCycleManager":[[19,1,1,"","add_beneficiaries"],[19,2,1,"","approver_group_id"],[19,1,1,"","check_eligibility"],[19,1,1,"","copy_beneficiaries_from_program"],[19,2,1,"","create_date"],[19,2,1,"","create_uid"],[19,2,1,"","cycle_duration"],[19,2,1,"","display_name"],[19,2,1,"","id"],[19,1,1,"","mark_cancelled"],[19,1,1,"","mark_distributed"],[19,1,1,"","mark_ended"],[19,1,1,"","new_cycle"],[19,1,1,"","on_state_change"],[19,1,1,"","prepare_entitlements"],[19,1,1,"","validate_entitlements"],[19,2,1,"","write_date"],[19,2,1,"","write_uid"]],"odoo.addons.g2p_programs.models.managers.eligibility_manager":[[22,0,1,"","BaseEligibilityManager"]],"odoo.addons.g2p_programs.models.managers.eligibility_manager.BaseEligibilityManager":[[22,1,1,"","enroll_eligible_registrants"],[22,1,1,"","import_eligible_registrants"],[22,1,1,"","verify_cycle_eligibility"]],"odoo.addons.g2p_programs.models.managers.entitlement_manager":[[23,0,1,"","BaseEntitlementManager"],[23,0,1,"","DefaultCashEntitlementManager"]],"odoo.addons.g2p_programs.models.managers.entitlement_manager.BaseEntitlementManager":[[23,1,1,"","approve_entitlements"],[23,1,1,"","open_entitlement_form"],[23,1,1,"","open_entitlements_form"],[23,1,1,"","prepare_entitlements"],[23,1,1,"","validate_entitlements"]],"odoo.addons.g2p_programs.models.managers.entitlement_manager.DefaultCashEntitlementManager":[[23,2,1,"","IS_CASH_ENTITLEMENT"],[23,2,1,"","amount_per_cycle"],[23,2,1,"","amount_per_individual_in_group"],[23,1,1,"","approve_entitlements"],[23,2,1,"","create_date"],[23,2,1,"","create_uid"],[23,2,1,"","currency_id"],[23,2,1,"","display_name"],[23,2,1,"","entitlement_validation_group_id"],[23,2,1,"","id"],[23,2,1,"","max_individual_in_group"],[23,1,1,"","on_transfer_fee_amt_change"],[23,1,1,"","on_transfer_fee_pct_change"],[23,1,1,"","open_entitlement_form"],[23,1,1,"","open_entitlements_form"],[23,1,1,"","prepare_entitlements"],[23,2,1,"","transfer_fee_amt"],[23,2,1,"","transfer_fee_pct"],[23,1,1,"","validate_entitlements"],[23,2,1,"","write_date"],[23,2,1,"","write_uid"]],"odoo.addons.g2p_programs.models.managers.notification_manager":[[24,0,1,"","BaseNotificationManager"],[24,0,1,"","SMSNotificationManager"],[24,0,1,"","SMSTemplate"]],"odoo.addons.g2p_programs.models.managers.notification_manager.SMSNotificationManager":[[24,2,1,"","create_date"],[24,2,1,"","create_uid"],[24,2,1,"","display_name"],[24,2,1,"","id"],[24,1,1,"","on_cycle_ended"],[24,2,1,"","on_cycle_ended_template"],[24,1,1,"","on_cycle_started"],[24,2,1,"","on_cycle_started_template"],[24,1,1,"","on_enrolled_in_program"],[24,2,1,"","on_enrolled_in_program_template"],[24,2,1,"","write_date"],[24,2,1,"","write_uid"]],"odoo.addons.g2p_programs.models.managers.notification_manager.SMSTemplate":[[24,2,1,"","g2p_sms_id"]],"odoo.addons.g2p_programs.models.managers.program_manager":[[25,0,1,"id0","BaseProgramManager"]],"odoo.addons.g2p_programs.models.managers.program_manager.BaseProgramManager":[[25,1,1,"id1","last_cycle"],[25,1,1,"id2","new_cycle"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute"},terms:{"0":[12,15,17,19,23,24,31],"04":16,"1":[14,16,19,23,24],"10":7,"120":33,"15":[15,31],"15069":16,"16":11,"1gb":16,"2":[9,12,14,17,28,31],"20":16,"2fa":5,"3":[7,17,28,31],"3rd":1,"9":31,"break":[8,9],"case":[8,9,14,18,19,22,23,24,34,35],"class":[3,19,22,23,24,25],"default":[1,18,19,22,23,24,25,28,34],"do":[1,7,10,14,15,18,19,23,24,28,33,34,35],"export":[12,26,30],"final":[9,10,16],"float":23,"function":[1,9,10],"import":[8,12,22,23,26],"int":[19,23,24],"long":14,"new":[7,8,9,10,16,19],"null":[19,23,24],"public":[1,3,14,15,17,33],"return":[1,14,19,22,23,25],"short":10,"static":23,"true":[19,22,23,24],"try":[8,9],A:[3,9,10,14,18,28,34],As:[9,14],Be:[1,7,8],Being:[3,10],By:[16,19,28],For:[1,3,5,9,10,14,18,28,34],If:[5,7,8,10,15,18,19,28,33,34],In:[8,9,10,12,14,18,33,34,35],It:[1,4,7,8,9,14,15,16,28,34],No:3,One:9,Such:10,TOS:33,The:[1,3,4,5,7,8,9,10,14,15,16,18,19,21,22,23,24,25,26,28,30,33,34],Their:10,Then:16,There:[18,28,34,35],These:[14,29,30],To:[5,8,15,16,23,29],__cmp__:23,__manifest__:9,_check_compani:[19,23,24],_inherit:[19,23,24],abandon:9,abil:[1,4,8],abl:[1,5],about:[3,14,18,29,33,34],abov:10,absolut:1,abus:3,accept:[3,8,14,18,33,34],access:[1,10,12,14,19,23,24,33,35],accident:33,accommod:14,accompani:9,accord:[1,33],account:[3,5,14,16,28,33],accur:8,achiev:30,across:9,act:[3,5,14,35],action:[1,3,4,10,14,29,33],activ:[5,9,10,12,16,33],ad:[5,8,9],adapt:3,add:[1,18,19,23,24,28,34],add_beneficiari:19,addit:[8,9,14,28],addon:[10,19,22,23,24,25],address:[3,5,7,8,16,28],adequ:9,adher:8,adjust:16,admin:[5,28],administr:[4,14,28],adopt:14,adult:28,advanc:3,advantag:15,affect:[1,3,7],after:[4,8,10,16],ag:[3,14],against:[14,18,33,34],agenc:14,agent:12,aggreg:16,aggress:3,agreement:[14,33],aim:[10,15],align:[3,5],all:[1,3,8,9,10,14,18,24,26,28,33,34],allevi:10,alloc:16,allow:[1,3,4,5,7,9,15,21,24,34,35],alongsid:9,alreadi:[5,7,8],also:[3,4,7,9,14,16,18,19,23,24,30,34],altern:28,although:5,alwai:[9,33],ami:16,amount:[10,14,33],amount_per_cycl:23,amount_per_individual_in_group:23,an:[1,3,7,8,9,10,14,15,16,19,22,23,24,28,34,35],ani:[3,5,7,8,14,15,16,23,26,33],announc:10,anoth:[9,10,28],answer:3,anti:33,api:[1,8,9,12,18,22,34],apolog:3,app:[1,5,12],appeal:14,appear:[3,5],appli:[3,10,14,19,23,24,33],applic:[1,7,14,33],appoint:3,appreci:8,approach:[10,14],appropri:[3,33],approv:[8,10,23],approve_entitl:23,approver_group_id:19,ar:[1,3,4,5,7,8,9,10,12,13,14,16,18,19,21,23,24,25,28,29,30,33,34,35],architectur:[4,15],area:[8,10,14],arg:[19,22],aris:[10,14],around:[3,9],ask:[8,10,33],aspect:35,assert:14,assess:14,asset:33,assign:9,assist:14,associ:[16,23],assum:9,assumpt:10,asynchron:12,attach:12,attack:3,attend:14,attent:3,attribut:[1,14,19,23,24],audit:[1,12],aup:33,auth:5,auth_oauth:5,auth_oidc:5,authent:[1,5],author:[1,5,33],authorization_endpoint:5,auto_join:[19,23,24],autodocsumm:31,autom:9,automat:[9,12,14,16],avail:[1,3,4,18],avatar:10,avoid:[1,3,8,14,18,33,34],aw:16,background:5,backlog:11,backport:10,backup:16,badg:9,balanc:14,bank:[14,18,28,34],base:[1,9,10,12,15,19,22,26,34],basecyclemanag:19,baseeligibilitymanag:[19,22],baseentitlementmanag:23,basenotificationmanag:24,baseprogrammanag:25,basi:33,basic:[1,9,19,23,24],batch:[18,34],bear:10,becaus:[5,14,16],becom:[8,10],been:[8,10,14],befor:[5,7,8,9,12,16,33],behavior:[3,7,8,14],behind:1,being:[9,18,19,26,34],believ:33,below:[7,16],beneficiari:[1,19,21,22,23,24],benefit:13,best:3,better:[9,16],between:[9,10,28,33],bind:33,biograph:28,birth:14,blob:9,board:[10,11],bodi:[3,5],book:14,bool:[19,22,23,24],both:29,branch:[7,9],brand:5,breakag:9,bring:33,browser:16,bug:8,bui:14,build:[1,9,15,16,17],built:15,bulk:11,bump:10,bundl:8,busi:[10,11],button:8,calcul:[1,12],call:[10,14,15,18,22,34],callabl:[19,23,24],callback:[19,23,24],calp:14,campaign:[18,34],can:[1,4,5,7,8,9,10,11,12,14,15,16,18,19,22,23,24,26,28,29,30,33,34,35],cancel:19,candid:[10,19,23,24],capabl:[14,29],capit:14,card:[12,33],care:[10,14],caretak:28,carri:14,cascad:[19,23,24],cash:[12,23],cast:3,categori:14,cd:7,ceas:33,censu:14,central:12,certain:14,chain:14,chang:[1,4,7,8,9,12,15,19],changelog:15,channel:3,characterist:[3,14],check:[8,9,10,23],check_compani:[19,23,24],check_elig:19,child:[14,28],children:[14,28],choic:1,choos:[1,16],chunk:8,ci:9,circumvent:33,claim:[14,33],clarif:8,clarifi:[3,10],clariti:3,clear:[7,8],clearli:[7,8,9],click:[8,29],client:[5,19,23,24],clone:16,code:[5,7,9,10],code_of_conduct:3,codebas:8,collabor:10,collect:[14,28],color:3,com:[9,11,16,31],come:[14,18],commcar:12,comment:[3,8,15],commerci:[1,15],commit:[3,7,8,16,31],committe:10,commod:1,common:[1,3,14,18,34],commonli:14,commun:[3,8,9,10],comodel_nam:[19,23,24],compani:[19,23,24],companion:9,compar:23,comparison:14,compat:30,compet:10,compil:9,complaint:3,complement:9,complet:9,complex:8,compli:[14,33],complianc:33,compliant:[5,7],compon:[14,24],compos:[5,14,16],comput:1,concept:[33,35],concern:[8,10,33],concis:8,condit:8,conduct:[7,28,33],confid:14,configur:[12,15,16,19,28,29],confirm:14,conflict:9,congratul:8,conjunct:[15,18,34],connect:[5,12],consent:12,consequ:3,consid:[3,8,14,28,33],consider:14,consist:[9,10,16,33],consol:5,constraint:33,construct:[3,8,9],contact:15,contain:[14,28],context:[19,23,24],continu:[3,10,14,16],contribut:[3,9,10,14,15],contributor:[8,9,10],control:[10,33,35],convent:8,cooper:14,coordin:[9,10],cope:14,copi:5,copy_beneficiaries_from_program:19,core:[1,13],corpor:5,correct:[9,14,23],correctli:9,correspond:[1,9,19,23,24],cosmet:10,could:[3,10,28],countri:[1,15],coverag:[9,14],creat:[5,7,9,10,16,19,25,29],create_d:[19,23,24],create_uid:[19,23,24],creation:10,credenti:[5,14],credit:[14,33],crise:14,criteria:[1,9,12,19,22],cultur:1,currenc:23,currency_field:23,currency_id:23,current:[2,9,10,15,18,19,23,24,26,34],custom:[12,15,18,34],cycl:[1,13,14,22,23,24,25],cycle_dur:19,cycle_manag:19,cycle_membership:[19,23],d:8,dai:33,daili:16,dashboard:12,data:[1,4,9,12,22,26,28,33,34],databas:14,date:[8,19],datetim:[19,23,24],decid:9,decim:23,decimalprecis:23,decis:[3,14],declar:[9,10],dedupl:[1,12,18,28],deem:[1,3],defaultcashentitlementmanag:23,defaultcyclemanag:19,defaulteligibilitymanag:22,defaultprogrammanag:25,defin:[1,13,14,18,19,21,22,23,24,25,28,34],definit:14,delai:14,deleg:[1,12,19,23,24],delet:[9,19,23,24],deliv:14,deliveri:14,demand:14,demonstr:[3,7,33],depend:[5,7,9,19,23,24,28,31],deploi:1,deploy:9,derogatori:3,describ:[7,8,9],descript:[7,9],design:[1,9,13,15,18,34],desir:9,destroi:33,detail:[4,8,9,33],detect:[10,14],determin:[1,3,13,14,22,23,25,34,35],develop:[5,7,8,28],development_statu:9,diagram:1,dialogu:8,dict:[19,23,24],did:14,differ:[1,3,9,18,28,34],difficult:10,difficulti:[10,14],digit:[14,15,23,28,33],digitalocean:16,direct:14,directli:16,disabl:3,disagre:8,disburs:[11,14],disclos:33,disclosur:7,discov:33,discret:14,discuss:[9,10,33],disparag:3,displai:[10,19,23,24],display_nam:[19,23,24],disrupt:33,distinct:14,distribut:[12,14,15,18,19,23,34],divers:3,divid:9,doc:[0,7,9,11],docker:5,document:[4,9,10,11,14,29],doe:[10,18,28,33,34],domain:[19,23,24],don:[8,10,16],done:[8,9,10,14,35],doubl:8,down:8,download:29,dpg:15,draft:19,drawback:10,due:[10,14],duplic:[18,34],dure:[3,8,10,14,33],duti:10,e:[3,14,16],each:[8,9,14,18,19,34,35],earli:9,easi:[1,8,15],easier:[9,33],easiest:[16,30],easili:[1,8,10,18,34],econom:[3,14],ecosystem:15,edit:[3,5,8],educ:[3,14],ee:[1,11],effect:33,effici:10,effort:[8,14],eg:10,either:[14,19],elast:16,elderli:28,electron:14,elig:[1,12,18,19],eligibility_manag:[19,22],els:8,email:[3,5,12,16,33],empathi:3,en:[0,14],enabl:[1,5,9,19,23,24,30],encapsul:[1,19,23,24],encompass:14,encount:[7,33],encrypt:1,end:[14,19],endpoint:5,enforc:28,engag:[8,33],engin:[11,16],enough:9,enrol:[14,19,22,24],enroll_eligible_registr:22,ensur:[5,7,8,9,10,14,35],enter:5,enterpris:16,entiti:28,entitl:[1,12,13,14,18,19],entitlement_manag:23,entitlement_validation_group_id:23,environ:[3,7,9],equal:[23,24],equip:33,erp:[1,15],error:14,especi:14,essenti:1,establish:14,etc:14,ethnic:3,etl:12,evalu:9,even:[9,10],event:[3,24,34],eventu:14,everi:1,everyon:[3,16],everyth:15,evolv:[5,15,35],exampl:[3,5,8,11,14,28],except:[19,23,24],excess:14,exclus:14,execut:[18,34],exempt:33,exist:[9,15,28,30],expect:[7,8,9,10,16],experi:[3,5,33,35],expertis:8,expir:12,explain:8,explan:3,explicit:[3,33],expos:[1,33],express:[3,23],extend:[1,9,19,23,24,33],extens:[9,10,24],extern:[1,3,22,31,34,35],extort:33,ey:10,face:1,factor:14,fail:10,failur:14,fair:3,fairli:3,faith:33,fals:[14,19,22,23,24],famili:28,familiar:7,faq:3,fast:16,faster:29,featur:[1,4,8,9,10,16,18,29,30,34],feedback:[3,8,14,33],feel:[8,9,10],few:[1,10,18,34],field:[12,15,19,23,24,28,30],figur:14,file:[9,12,30],filter:[19,29],financ:14,find:[8,9,11,14],fine:12,fingerprint:14,first:[2,7,9,16,23],fit:[18,34],fix:[8,33],flexibl:1,flight:1,flow:[5,12],focus:[3,8,10,14,15],follow:[1,3,5,7,8,9,10,15,16,17,28,29,30,33],food:14,fork:7,form:[12,14,23],formal:14,format:9,forward:[8,10],foster:10,found:5,fr:0,fragment:9,framework:[1,12],free:[3,8,15],from:[1,3,5,8,9,10,12,14,16,19,23,24,29,33,35],front:[5,35],full:28,fund:14,further:[14,33],furthermor:1,futur:[9,10,16,34],g2p_bank:31,g2p_program:[19,22,23,24,25,31],g2p_registry_bas:31,g2p_registry_group:31,g2p_registry_individu:31,g2p_registry_membership:31,g2p_sms_id:24,g2pcycl:19,g:14,gender:3,gener:[5,10,14,17,18,19,23,24,26,33,34],get:[5,16],git:[16,31],gitbook:11,github:[7,8,9,10,15,16,31],give:[3,10],given:[9,10,14,18,22,23,34],gnu:17,go:[5,13,16,33],goal:9,good:[8,9,10,15,16,33],googl:9,govern:[1,14],gracefulli:3,grain:12,grant:[8,14],graphql:12,grate:8,greater:23,green:9,grievanc:1,group:[12,14,25,29],gsma:12,guarante:16,guid:10,guidanc:[8,10],ha:[1,8,10,14,16,18,28,34],hack:33,halt:9,handl:[10,19,23,24],hapen:34,happen:[9,10,14,24],harass:3,hardwar:1,harm:[3,33],have:[1,3,5,8,9,10,14,15,16,18,28,33,34],head:28,health:14,healthcar:33,healthi:3,hear:33,heart:[28,34],help:[7,8,10,14,16,33],helper:23,her:10,here:8,hesit:15,hi:10,highest:10,highlight:9,histor:23,hold:23,holder:33,homogen:10,hook:[7,19],host:9,household:28,how:[1,8,15,18,21,34],html:[0,3,7],http:[0,3,9,10,11,16,31],httpdomain:31,hub:[1,11],i:30,id:[5,12,19,23,24],idea:[8,10,16],ident:[1,3,12,14],identifi:[5,10,14,33],idiomat:23,illustr:8,imag:5,imageri:3,img:16,immedi:[10,33],impact:[3,10],implement:[1,4,9,14,18,19,22,23,24,25,34],import_eligible_registr:22,impos:14,impract:10,impress:10,improv:[8,9,10,33],inappropri:3,incent:14,incid:[3,8],includ:[3,7,8,9,10,14,15,25,33],inclus:[3,8,14],incom:[14,15],incompat:9,inconsist:[14,33],incub:9,independ:[5,9,33,35],individu:[3,12,14,29],inform:[1,3,7,8,14,28,33],initi:[9,14,33],inji:12,innov:10,input:15,inspir:[1,3],instabl:9,instal:[1,5,7,9,15],instanc:[3,5,10,16],instead:7,institut:14,instruct:[4,7,16],instrument:[12,14],insult:3,insur:14,intak:14,integr:[1,5,12,14,15],intend:14,inter:12,interact:[3,33],interest:10,interfac:[1,5,8,12,19,22,23,24,25],interfer:33,internet:33,interoper:1,interven:10,intervent:14,introduc:10,invers:24,inverse_nam:24,invest:14,investig:3,invis:3,invok:16,involv:[3,8,10,14],io:[11,12],ip:16,iri:14,is_cash_entitl:23,is_zero:23,issu:[3,7,8,9,10,11,14,15,16,19,33],issuanc:12,issue_pay:19,iter:9,its:[1,15],itself:[18,34],jira:11,job:14,join:[19,23,24],journei:[18,34],just:[1,3,28],justif:9,jwk:5,jwks_uri:5,keep:[8,10,16,33],kei:[1,4,9,10],keycloak:35,kind:[3,12,14,23,34],know:8,known:[8,9,10,14,33],kobotoolbox:12,labor:14,lack:14,ladder:3,languag:[1,3],larg:[8,10,16],larger:[1,10],last:25,last_cycl:25,later:5,latest:8,latter:14,launch:16,law:33,lead:3,leader:3,learn:[3,15,29],least:[8,9,33],leav:14,left:10,legal:33,length:[19,23,24],lesser:17,let:8,level:3,leverag:1,lgpl:17,licens:1,like:[3,5,8,9,23],limit:[19,23,24,33],line:[14,19,23,24],link:5,lint:[9,10],linux:15,list:[9,10,18,19,23,29,34],live:14,local:[1,14],localhost:16,lock:1,log:12,login:10,logo:5,look:[9,15],low:[10,15],lower:23,lpglv3:17,lt:16,made:[4,8,9],mai:[3,5,8,9,10,14,19,23,24],mail:[3,10,16],mailto:0,main:10,maintain:[8,9,14,15,33],mainten:10,major:9,make:[3,7,8,9,14,16,19,23,24,29,33],manag:[1,5,7,8,10,14,15,16],mandat:14,mandatori:[9,19,23,24],mani:[14,16],manifest:[9,10],manner:[8,33],many2on:[23,24],map:30,mark:[19,23,24],mark_cancel:19,mark_distribut:19,mark_end:19,markup:8,marriag:14,mass:14,master:9,match:[8,14,19,22],max_individual_in_group:23,maximum:[19,23,24],meal:14,mean:[9,14],meant:8,measur:23,mechan:[5,35],media:3,meet:[8,9,14,15],member:[3,8,10,14,28],memori:16,menu:[5,16,28,29,30],merchant:[18,34],merg:[9,10],messag:[8,9],met:8,method:[22,23],micro:16,microfin:14,middl:15,mifo:11,mifosforg:11,might:7,migrat:9,million:1,mind:8,minim:14,minimum:[9,33],minut:7,misconduct:8,mistak:3,mobil:[1,12,14],mode:5,model:[1,9,19,22,23,24,25,26],moder:3,modul:[1,4,15],modular:15,monei:[1,12,14],monetari:[23,34],monitor:1,more:[8,9,10,11,14,15,28,29,33],mosip:[1,12],most:[8,14,18,19,22,34],move:8,mozilla:[3,17],mph:11,mpl:17,much:[7,8,18,34],multi:12,multidisciplinari:14,multipl:[8,14,19],must:[1,9,10,14],myst_pars:31,n:14,name:[4,5,19,23,24,28],nation:3,nativ:35,natur:3,necessari:[1,8,9],need:[1,5,14,15,16,18,19,22,28,34],neg:10,neighbour:28,network:[14,16],new_cycl:[19,25],new_start_d:19,newli:25,next:[7,8,9,10,25],nightli:9,nomin:[18,34],non:8,noncontributori:14,noncoverag:14,none:19,nongovernment:14,not_elig:19,note:[5,19,23,24,33],notic:[9,10],notif:[1,12,18],notifi:[24,34],notification_manag:24,number:[7,9,10,12,28],oauth:12,object:[14,19,23,24],oblig:[3,14],obtain:16,obviou:8,oca:[5,9,10],oca_module_lifecycle_development_statu:9,occur:7,odk:12,odoo:[1,9,10,12,15,17,18,19,22,23,24,25,29,31,34,35],odoo_dynamic_dashboard:31,offens:3,offer:1,offic:14,offici:[3,8],offlin:3,oidc:5,on_cycle_end:24,on_cycle_ended_templ:24,on_cycle_start:24,on_cycle_started_templ:24,on_enrolled_in_program:24,on_enrolled_in_program_templ:24,on_start_date_chang:19,on_state_chang:19,on_transfer_fee_amt_chang:23,on_transfer_fee_pct_chang:23,onc:[8,9,16],ondelet:[19,23,24],one2mani:24,one:[7,8,9,10,14,16,19,28,33],ones:[1,9,28],onli:[5,9,19,23,24,28,33,34],onlin:[3,18,34],open:[1,3,7,8,15,16,23,30],open_entitlement_form:23,open_entitlements_form:23,openg2p:[15,17,31],openid:[5,12],openspp:[1,4,5,7,8,9,10,12,13,17,18,22,28,30,31,34,35],openupgrad:9,oper:[10,14,19,23,24,33],opinion:3,opportun:8,option:[14,15,16,19,23,24],order:[5,8,10,14,16,18,34],org:[0,3,9,10,33],organ:[1,14,33,34],orient:3,origin:[9,14],other:[1,3,5,8,9,10,14,15,16,17,23,24,28,33],otherwis:[3,5,22],our:[5,7,8,15,16],out:14,outlin:[8,9,33],outreach:14,overal:[3,33],overlap:9,oversight:10,own:[1,8,14,15,29,33],packag:[7,16],page:[7,10,15],paid:14,pair:23,paper:[18,34],param:23,paramet:[1,19,23,24],parent:28,part:[1,4,8,18,28,34],parti:[1,9,33],particip:[3,14,33],particular:[10,14],pass:[8,9,12],password:5,past:5,patch:16,pattern:[3,14],payment:[1,11,12,19],peer:9,pend:9,pension:14,peopl:[3,8,9,10,14],per:28,percentag:9,perform:[4,5,10,28,33],period:[3,14],permiss:[3,5,9,33],person:[3,9,14,28,33],phase:14,phi:33,phone:[12,28],physic:3,physiolog:14,pictur:28,piec:1,pii:33,ping:10,pip:[7,16],plai:33,plan:[8,9,18,34],platform:[1,9,35],pleas:[15,33],plu:28,po:[18,34],polici:[7,14],polit:3,poor:14,popul:14,popular:15,port:[9,16],portal:12,posit:3,possibl:[1,7,8,9,19,23,24],post:[3,14],potenti:[9,14],poverti:14,power:18,pr:[7,8,9,10],pre:[7,9,16,31],precis:23,precision_round:23,preclud:10,predict:14,prefer:[0,14],prepar:[19,23],prepare_entitl:[19,23],present:14,prevail:33,previou:[1,9,19],princip:28,principl:28,prinicipl:4,print:[12,18,34],prior:9,privaci:[1,3,28,33],privat:[3,14],problem:[7,8,10,14],proce:10,procedur:14,process:[5,13,14,29,33,35],product:9,product_uom_id:23,product_uom_qti:23,profession:3,program:[1,13,14,15,19,21,22,24,31,33],program_manag:25,program_membership:[22,24],programm:12,progress:[9,18,33,34],project:[7,8,9,10,11,15,16,28],promot:9,promptli:[3,33],proof:33,proper:23,propos:[8,9,10],proprietari:[1,33],protect:1,prove:14,provid:[1,3,5,8,9,10,15,16,18,19,22,23,24,25,26,33,34],psc:[9,10],publicli:33,publish:[3,9],pull:[7,9,10,14,16],purpos:[8,9,14,15,23],put:8,py:9,pyenv:7,pypi:9,python:[7,16,19,23,24],qty_don:23,qualifi:14,qualiti:[8,9,10,14],quantiti:23,queri:14,question:[3,10,15],r:7,race:3,rais:[8,14],rang:14,rapidli:15,rapidpro:12,ration:14,re:[7,8],reach:8,read:[7,16,24,29],readi:[8,18,34],readm:[8,9,10],realli:28,realm:5,reason:[3,9,33],rec:23,receipt:14,receiv:[14,18,34],recipi:[14,28],recommend:[4,5,7,9,18,34,35],record:[14,18,19,23,24,30,34],recordset:[19,23,24],redirect:5,reduc:14,refer:[8,14,19,23,24],referenc:23,reflect:8,regardless:[3,9,14],regist:14,registr:[1,13,16,18,25,34],registri:31,regular:[14,16],reject:3,relat:[9,10,12,14,19,23,24,33],relationship:28,relax:10,releas:[2,8],relev:[7,8,9,33],reliabl:8,religion:3,remain:16,remedi:33,remov:3,replac:1,repo:10,report:[0,3,7,8,12,33],repositori:[7,9,10],repres:[3,18,28,34],request:[1,3,7,9,10,12],requir:[1,4,7,9,14,28,33],res_curr:23,research:33,reset:5,resetdb:16,resid:14,resolut:8,resolv:[14,33],respect:[3,33,35],respond:33,respons:8,rest:[1,12],restrict:[16,19,23,24,33],restructuredtext:8,result:[1,15,23],retriev:[19,23,24],revenu:14,review:[3,9,10],rework:26,rfc:9,right:[3,12,23,28],risk:10,road:12,roadmap:10,role:28,round:23,rpc:26,rst:[9,10],rule:[4,10,14,33],run:[15,16,19],s:[1,3,5,7,8,9,12,14,15,16,19,23,24,28],safe:8,said:14,same:[1,5,9,10,14,16],satisfi:14,save:[5,14],scan:14,school:[14,28],scope:[5,9],script:9,se:16,search:[5,7,14,19,23,24],second:23,secret:5,section:7,sector:14,secur:[3,5,7,16,18,28,33,34,35],see:[3,8,14,28],seek:14,seem:10,select:[12,14,16,23,29],self:[5,23],semant:23,send:12,sent:[12,16],separ:[8,9],sequenc:19,seri:3,seriou:3,server:[5,15,16,18,34],servic:[1,5,15,16,33],set:[1,3,5,7,9,14,16,19,23,24,28],setup:[5,31],sever:9,sex:3,sexual:3,share:[18,34],shield:[5,35],shock:14,should:[1,7,8,9,10,18,19,22,28,33,34],show:1,sibl:28,side:[19,23,24],sign:[5,35],signal:9,signific:[8,9],signin:5,similar:[9,16],simpl:[1,10],simpli:28,simultan:14,sinc:[9,10],singl:[3,5,8,9,14,19,23,24,35],size:[3,19,23,24],skeleton:9,sm:12,small:[1,10],smaller:[8,9],smile:4,smile_audit:4,smooth:14,smsnotificationmanag:24,smstemplat:24,snippet:8,so:[1,7,10,14,23],social:[1,3,18,34],socio:3,softwar:[1,11,17],solut:[1,7,18,34],solv:14,some:[1,8,9,10,23,24,28,34],someon:8,someth:14,sometim:[10,18,34],soon:8,sort:[3,14],sourc:[14,15,19,22,23,24,25],space:3,spec:9,special:[19,23,24],specif:[1,4,9,10,14,28],specifi:3,spectrum:14,spent:14,sphinx:31,sphinx_rtd_them:31,sphinxcontrib:31,split:[9,10],ssh:16,staff:14,stage:9,stakehold:14,stall:10,stamp:14,standalon:1,standard:[1,5,7,8,9,10],start:[7,9,19],state:[9,14,19,23,24],statu:[3,18,34],steer:10,step:[7,9,10,16,29,30,33],stop:10,storag:12,store:[1,4,5,9,19,22,23,24,28,34],str:[19,23,24],streamlin:15,string:[19,23,24],strive:33,structur:14,style:8,sub:1,subdirectori:31,subfamili:14,submit:[7,33],subsidi:14,success:8,suffer:10,suggest:[8,9],suitabl:9,summari:9,support:[9,10,14,16,18,33,34],sure:[7,8,9,14],surviv:9,suspect:33,sustain:3,sweep:14,symbol:23,system:[1,4,5,7,12,14,16,18,22,26,28,34,35],t2:16,t:[8,9,10,16],tab:5,take:[3,7,8,10,15,33],taken:[10,23],tangibl:14,target:[19,23,24],task:[9,10,14],tbd:[18,30],team:15,technic:[4,5,9,11,14],techniqu:14,technolog:[1,33],templat:[5,14,18,29,34],ten:1,tenant:12,term:[3,14,19,23,24,33],terminolog:9,test:[5,8,9,33],testabl:1,tester:9,text:5,than:[9,10,23],thank:[8,9,15],theat:14,thei:[3,5,9,10,13,14,19,28],them:[5,7,9,10,14,18,19,34],themselv:10,therefor:[10,23],thi:[3,5,7,8,9,10,15,19,22,23,24,25,26,30,33,35],thing:8,think:[18,34],third:[1,33],thoroughli:8,those:[1,3,10,14,18,28,33,34],though:35,thousand:1,threaten:3,through:[1,3,5,9,10,12,13,14,15,16,18,19,23,24,33],thu:[5,35],ticket:12,time:[3,8,9,14,18,33,34],tip:8,titl:7,todo:16,togeth:14,token:5,token_endpoint:5,too:10,tool:23,top:[1,15,17],total:23,toward:[3,9,10],track:4,tracker:[8,11],trail:4,transfer_fee_amt:23,transfer_fee_pct:23,transform:14,translat:[3,19,23,24],travisci:9,triag:33,trim:[19,23,24],troll:3,trust:10,tupl:23,two:[10,14,23,35],txt:7,type:[14,16,19,23,28],typic:[9,10,14],ubuntu:16,unabl:7,unaccept:3,unattend:10,uncertain:33,under:[7,15,16,33],understand:[8,14,33],unintend:33,uniqu:[14,28],unit:[8,9,14,23],unless:[9,10],unprofession:3,unreact:10,unrel:8,unsolicit:3,unstabl:9,unwelcom:3,up:[1,7,8,16],updat:[16,18,19,34],upgrad:1,upload:30,upon:[14,19,23,24],uptim:16,uri:5,url:5,us:[0,1,3,4,7,8,9,10,11,12,14,15,18,19,22,23,24,26,28,29,33,34,35],usabl:9,usag:33,user:[4,8,9,14,15,22,33],usual:[8,9,14,19,23,24],v3:17,valid:[5,12,19,22,23,33],validate_entitl:[19,23],valu:[9,19,23,24,34],variou:34,vast:15,ve:33,vendor:[1,33],verif:[12,14,18,34],verifi:[14,18,19,22,23,24,34],verify_cycle_elig:22,version:[3,7,8,9,10],via:[1,3,33],view:[5,23],viewpoint:3,violat:[3,33],virtual:7,visibl:[3,9],visit:14,voic:14,volunt:10,voucher:12,vulner:[7,14],wa:[3,5,7,14],wai:[3,9,14,16,23,30],wait:14,waiv:33,want:[1,7,29,30,33],warn:9,we:[3,4,5,8,9,14,18,33,34],web:[16,19,23,24],websit:[9,15],websub:12,welcom:[3,7,8,33],well:[1,3,8],were:[3,33],what:[3,9,18,19,23,24,33,34,35],when:[3,5,8,9,10,16,18,19,23,24,28,33,34],whenev:[1,10],where:[1,14],whether:[14,19,23,24,33],which:[3,10,14,18,25,33],who:[10,14,35],whole:[10,19,23,24],whom:14,why:3,wiki:3,wip:9,wish:10,within:[3,21,33,34],without:[1,3,7,9,14],won:9,work:[1,8,9,14,18,33,34],workflow:9,world:14,would:[14,33],write:[8,10],write_d:[19,23,24],write_uid:[19,23,24],written:3,www:3,x:12,xl:12,xlsx:29,xml:26,ye:5,yet:9,you:[1,5,8,9,11,15,16,18,28,29,33,34],your:[1,5,7,8,15,16,18,29,30,33,34],zero:23},titles:["OpenSPP security contacts and policy","Architecture","Changelog","Contributor Covenant Code of Conduct","Audit Logs","Configuring Keycloak for OAuth","Configuration","Contributing","Contributing","Modules Maturity Levels and Development Status Policy","Module Lifecycle - Maintainer Role Policy","Overview","Features","Functional Architecture","Glossary","OpenSPP - Social Protection Platform","Installation","Licensing","Overview","Cycle Manager","Dashboards","Deduplication Manager","Eligibility Manager","Entitlement Manager","Notification Manager","Program Manager","API","&lt;no title&gt;","Overview","Exporting Registrants","Importing Registrants","&lt;no title&gt;","&lt;no title&gt;","OpenSPP Vulnerability Disclosure Policy","Managing Programs","Managing Users"],titleterms:{"0":2,"1":[2,3],"2":3,"3":3,"4":3,"export":29,"function":13,"import":30,"new":5,ad:10,aka:14,alpha:9,amazon:16,api:26,approach:1,architectur:[1,13],attribut:3,audit:4,authent:[14,35],author:35,ban:3,base:14,beneficiari:[12,14,18,34],benefit:14,beta:9,biometr:14,bug:7,build:7,cash:[14,18,34],cct:14,center:14,central:30,changelog:2,channel:[0,33],cloud:16,co:14,code:[3,8],commit:33,commun:[12,14],complaint:14,complianc:14,compon:1,concept:34,condit:14,condition:14,conduct:[3,8],configur:[1,4,5,6],contact:0,content:[9,10],contribut:[7,8],contributor:3,correct:3,coven:3,criteria:14,csv:[29,30],custom:5,cycl:[12,18,19,34],dashboard:20,data:[14,30],de:14,dedupl:[21,34],design:14,develop:[2,9,15,16],did:7,disclosur:[0,33],docker:16,document:[7,8,28],duplic:14,ec2:16,ecosystem:1,elig:[14,22,34],enforc:3,entitl:[23,34],exampl:[1,23],excel:[29,30],exist:5,expect:33,extens:1,famili:14,featur:12,find:7,first:6,fix:7,from:30,geograph:14,get:[8,15],glossari:14,grievanc:[12,14],grm:14,group:28,guidelin:3,harbor:33,host:1,household:14,human:14,id:28,identif:14,individu:28,inform:15,instal:[4,16],instrument:[18,34],introduct:[9,10,33],keycloak:5,languag:0,larg:1,level:9,licens:17,lifecycl:10,link:0,log:4,login:5,maintain:10,manag:[12,18,19,21,22,23,24,25,34,35],matur:9,mechan:14,membership:28,merg:8,mid:1,mobil:[18,34],modul:[9,10],modular:1,monei:[18,34],noncompli:14,notif:[24,34],oauth:5,odk:30,odoo:[5,26],offici:33,ongo:2,openspp:[0,15,16,33],option:5,our:[0,3,33],out:33,overview:[11,18,28],page:5,patch:7,payment:[14,18,34],perman:3,platform:15,pledg:3,polici:[0,9,10,33],principl:[1,15],process:8,product:16,program:[12,18,20,25,34],project:1,protect:[14,15],provid:14,provis:14,pull:8,quick:16,recommend:16,reconcili:14,redress:14,registr:[12,14,28,29,30],registri:14,relat:28,remov:10,request:8,respons:[3,10,14],rest:26,restrict:[18,34],review:8,role:10,run:6,safe:33,scope:[3,33],secur:[0,12],servic:14,size:1,social:[14,15],speak:0,stabl:9,standard:3,start:[8,15,16],statu:9,submit:8,system:33,tabl:[9,10],target:14,team:0,technic:15,temporari:3,transfer:[14,18,34],type:[18,34],uct:14,uncondit:14,understand:0,upcom:12,updat:[8,30],us:[5,16,30],user:[5,35],voucher:[18,34],vulner:[0,33],warn:3,write:7,you:7}})