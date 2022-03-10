<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductRecieved;
use App\Models\ProductDispatched;

class ProductController extends Controller
{
    public function addproduct(Request $request){
        
        $result= Product::create([
            'product_name' =>$request['product_name'],
            'supplier_name' =>$request['supplier_name'],
            'unit_price' =>$request['unit_price'],
            'quantity' =>$request['quantity'],
        ]);

        if($result)
        {
            $response = ['Products Updated Successfully'];

            return response( $response, 200);
        }
        else{
            return ['Product update unsuccessful'];
        }

    }

    public function removeproduct(Request $request){
        
        Product::where('product_name',$request['product_name'])->delete();
       
        $response = [
            'Product Removed Successfully'        
        ];

        return response( $response, 200);
    }

    public function displayproduct(){

        $response = Product::all() ;
        
        return response($response, 200);
    }

    public function displayproductname(){

        $response = Product::all('product_name') ;
        
        return response($response, 200);
    }

    public function productrecieved(Request $request){

        $result1=ProductRecieved::create([
            'order_id' =>$request['order_id'],
            'item' =>$request['item'],
            'quantity' =>$request['quantity'],
        ]);
        
        $result2=Product::where('product_name', $request['item'])
                ->increment('quantity',$request['quantity']);

        if($result1 && $result2 )
        {
            $response = ['Products Updated Successfully'];

            return response( $response, 200);
        }
        else{
            return ['Product update unsuccessful'];
        }

    }

    public function displayproductrecieved(){

        $response = ProductRecieved::all() ;
        
        return response($response, 200);
    }

    public function displayproductdispatched(){

        $response = ProductDispatched::all() ;
        
        return response($response, 200);
    }


    public function productdispatched(Request $request){

         $result1=ProductDispatched::create([
            'sale_id' =>$request['sale_id'],
            'product_name' =>$request['product_name'],
            'quantity' =>$request['quantity'],
        ]);
        
        $result2=Product::where('product_name', $request['product_name'])
                ->decrement('quantity',$request['quantity']);

        if($result1 && $result2 )
        {
            $response = ['Products Dispatched Successfully'];

            return response( $response, 200);
        }
        else{
            return ['Product Dispatch unsuccessful'];
        }

    }

    public function getSupplier(Request $request){
        
        $result=Product::get('supplier_name');

        if($result)
        {
            return response( $result, 200);
        }
        else{
            return ['Cannot get Supplier'];
        }

    }

}
