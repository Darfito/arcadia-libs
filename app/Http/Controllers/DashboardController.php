<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        $books = Book::all();
        // dd($books);
        return inertia('Welcome', ['books' => $books]);
    }
}
