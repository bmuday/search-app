<template>
  <div>
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <router-link to="/frontend" active-class="active" class="nav-link"
              >Frontend</router-link
            >
          </li>
        </ul>
      </header>
    </div>
    <div className="album py-5 bg-light">
      <div className="container">
        <router-view />
      </div>
    </div>
  </div>
</template>
