import {Column} from "../../../../../../../src/decorator/columns/Column";
import {Embedded} from "../../../../../../../src/decorator/Embedded";
import {ManyToOne} from "../../../../../../../src/decorator/relations/ManyToOne";
import {Category} from "./Category";
import {Subcounters} from "./Subcounters";

export class Counters {

    @Column()
    likes: number;

    @Column()
    comments: number;

    @Column()
    favorites: number;

    @ManyToOne(type => Category, category => category.posts)
    category: Category;

    @Embedded(() => Subcounters)
    subcounters: Subcounters;

    categoryId: number;

}