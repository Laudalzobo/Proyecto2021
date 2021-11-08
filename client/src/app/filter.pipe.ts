import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

transform(value: any, arg :any): any {
const resultPosts = [];
for(const post of value){
    if (post.apellido.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        console.log('Si');
        resultPosts.push(post);
    
    };

};
return resultPosts;
}}

