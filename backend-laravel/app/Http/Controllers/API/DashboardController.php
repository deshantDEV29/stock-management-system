<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\ProductRecieved;
use App\Models\ProductDispatched;
use DB;


class DashboardController extends Controller
{
    public function displaytotalproduct(){

        $producttotal = Product::all()->unique('product_name') ;
        $response = $producttotal->count();
        
        return response($response, 200);
    }

    public function displaytotalsuppliers(){

        $producttotal = Product::all()->unique('supplier_name') ;
        $response = $producttotal->count();
        
        return response($response, 200);
    }

    public function displayvaluestocks(){

        $response = DB::table('products')
           ->sum(DB::raw('unit_price * quantity'));
        
        return response($response, 200);
    }

    public function displaytopselling(){

        $response = ProductDispatched::select('product_name')
            ->groupBy('product_name')
            ->orderByRaw('COUNT(*) DESC')
            ->limit(1)
            ->get();
        
        return response($response, 200);
    }
}
